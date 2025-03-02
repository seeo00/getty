import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/modules/thunks/getDetailsThunks';
import { getKoreanRating } from '../../assets/api/certificationData';
import { CertificationIcon } from '../../ui/icon/CertificationIcon';

const Certification = ({ koreanRating: propKoreanRating }) => {
  const dispatch = useDispatch();
  const { category, detailID } = useParams();
  const { detailsData, loading, error } = useSelector((state) => state.detailsR);
  const { certificationData, loading: certificationLoading } = useSelector((state) => state.certificationsR);

  useEffect(() => {
    if (!detailsData) {
      dispatch(getDetails({ id: detailID, contentType: category }));
    }
  }, [dispatch, detailsData, detailID, category]);

  if (loading || certificationLoading) return <span>로딩 중...</span>;
  if (error) return <span>데이터를 찾을 수 없습니다.</span>;
  if (!detailsData) return null;

  const detail = detailsData;
  let finalKoreanRating = '';

  if (propKoreanRating) {
    finalKoreanRating = propKoreanRating;
  } else if (category === 'movie') {
    // 영화인 경우: release_dates 데이터를 우선 활용
    const releaseDatesResults = detail.release_dates?.results || [];
    const krRelease = releaseDatesResults.find((item) => item.iso_3166_1 === 'KR');
    let certificationCode =
      krRelease &&
      krRelease.release_dates &&
      krRelease.release_dates[0] &&
      krRelease.release_dates[0].certification
        ? krRelease.release_dates[0].certification
        : '';

    // release_dates에 인증 코드가 없거나 비어 있다면 production_countries를 활용
    if (!certificationCode && detail.production_countries && detail.production_countries.length > 0) {
      const prodCountryCode = detail.production_countries[0].iso_3166_1;
      // certificationData 배열에서 해당 국가의 rating 값 중 숫자로 변환 가능한 값만 필터링
      const validCerts = certificationData
        ? certificationData.filter(
            (item) =>
              item.iso_3166_1 === prodCountryCode &&
              item.rating &&
              !isNaN(Number(item.rating))
          )
        : [];
      if (validCerts.length > 0) {
        certificationCode = validCerts[0].rating;
      }
      finalKoreanRating = getKoreanRating(prodCountryCode, certificationCode);
    } else {
      // release_dates에 값이 있으면 KR 기준으로 처리
      finalKoreanRating = getKoreanRating('KR', certificationCode);
    }
  } else {
    // TV 시리즈인 경우
    const originCountryCode =
      detail.origin_country && detail.origin_country.length > 0 ? detail.origin_country[0] : null;
    let certificationCode = '';
    if (certificationData && originCountryCode) {
      // certificationData 배열에서 해당 국가의 유효한 rating(숫자로 변환 가능한)을 필터링
      const validCerts = certificationData.filter(
        (item) =>
          item.iso_3166_1 === originCountryCode &&
          item.rating &&
          !isNaN(Number(item.rating))
      );
      if (validCerts.length > 0) {
        certificationCode = validCerts[0].rating;
      }
    }
    finalKoreanRating = getKoreanRating(originCountryCode, certificationCode);
  }

  return (
    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {finalKoreanRating === '12세이용가' ? (
        <CertificationIcon rating="12" aria-label="12세이용가" style={{ marginLeft: '10px' }} />
      ) : finalKoreanRating === '15세이용가' ? (
        <CertificationIcon rating="15" aria-label="15세이용가" style={{ marginLeft: '10px' }} />
      ) : finalKoreanRating === '19세이용가' ? (
        <CertificationIcon rating="19" aria-label="19세이용가" style={{ marginLeft: '10px' }} />
      ) : (
        <strong style={{ marginLeft: '10px' }}>{finalKoreanRating || '연령 등급 정보 없음'}</strong>
      )}
    </span>
  );
};

export default Certification;
