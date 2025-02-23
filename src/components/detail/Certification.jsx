import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../store/modules/thunks/getDetails';
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
  const originCountryCode = detail.origin_country[0];

  // certificationData 예시: [{ iso_3166_1: "US", rating: "TV-MA" }, { iso_3166_1: "KR", rating: "" }, ...]
  const certificationForCountry = certificationData
    ? certificationData.find((item) => item.iso_3166_1 === originCountryCode)
    : null;
  const certificationCode = certificationForCountry ? certificationForCountry.rating : null;
  const koreanRating = propKoreanRating || getKoreanRating(originCountryCode, certificationCode);

  // 부모에서 li로 감싸고 있다면 여기서는 li 대신 span으로 반환하여 중첩 문제를 피합니다.
  return <span><strong>&nbsp;{koreanRating}</strong></span>;
};

export default Certification;
