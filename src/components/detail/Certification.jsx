import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/modules/thunks/getDetailsThunks';
import { getKoreanRating } from '../../assets/api/certificationData';

const Certification = ({ koreanRating: propKoreanRating }) => {
  const dispatch = useDispatch();
  const { detailType, detailID } = useParams();
  const { detailsData, loading, error } = useSelector((state) => state.detailsR);
  const { certificationData, loading: certificationLoading } = useSelector((state) => state.certificationsR);

  useEffect(() => {
    if (!detailsData) {
      dispatch(getDetails({ id: detailID, contentType: detailType }));
    }
  }, [dispatch, detailsData, detailID, detailType]);

  if (loading || certificationLoading) return <span>로딩 중...</span>;
  if (error) return <span>데이터를 찾을 수 없습니다.</span>;
  if (!detailsData) return null;

  const detail = detailsData;
  let finalKoreanRating = '';

  if (propKoreanRating) {
    finalKoreanRating = propKoreanRating;
  } else if (detailType === 'movie') {
    // 영화인 경우 우선 release_dates 데이터를 활용
    const releaseDatesResults = detail.release_dates?.results || [];
    const krRelease = releaseDatesResults.find((item) => item.iso_3166_1 === 'KR');
    let certificationCode =
      krRelease && krRelease.release_dates && krRelease.release_dates[0]
        ? krRelease.release_dates[0].certification
        : '';

    // release_dates에 인증 코드가 없으면 production_countries를 이용하여 certificationData에서 가져오기
    if (!certificationCode && detail.production_countries && detail.production_countries.length > 0) {
      const prodCountryCode = detail.production_countries[0].iso_3166_1;
      const certificationForCountry =
        certificationData && certificationData.find((item) => item.iso_3166_1 === prodCountryCode);
      certificationCode = certificationForCountry ? certificationForCountry.rating : '';
      finalKoreanRating = getKoreanRating(prodCountryCode, certificationCode);
    } else {
      finalKoreanRating = getKoreanRating('KR', certificationCode);
    }
  } else {
    // TV 시리즈인 경우
    const originCountryCode =
      detail.origin_country && detail.origin_country.length > 0 ? detail.origin_country[0] : null;
    const certificationForCountry =
      certificationData && originCountryCode
        ? certificationData.find((item) => item.iso_3166_1 === originCountryCode)
        : null;
    const certificationCode = certificationForCountry ? certificationForCountry.rating : '';
    finalKoreanRating = getKoreanRating(originCountryCode, certificationCode);
  }

  return (
    <span>
      <strong>&nbsp;{finalKoreanRating || '연령 등급 정보 없음'}</strong>
    </span>
  );
};

export default Certification;
