import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../store/modules/thunks/getDetails';
import {
  EpiContainer,
  FlexContainer,
  PaddingContainer,
  Image,
  Title,
  Overview,
  IconWrapper,
  ImageWrapper,
} from './style';
import PreviewPlayIcon from '../../ui/icon/PreviewPlayIcon';
import { color } from '../../styled/common';

const EpisodeCard = () => {
  const dispatch = useDispatch();
  const { detailType, detailID } = useParams();
  const { detailsData, loading, error } = useSelector((state) => state.detailsR);

  useEffect(() => {
    if (!detailsData) {
      dispatch(getDetails({ id: detailID, contentType: detailType }));
    }
  }, [dispatch, detailsData, detailID, detailType]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 찾을 수 없습니다.</p>;
  if (!detailsData) return null;

  const detail = detailsData;
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <EpiContainer>
      <FlexContainer>
        <ImageWrapper>
          <Image src={`${imageBaseUrl}${detail.poster_path}`} alt={detail.title || detail.name || '에피소드 이미지'} />
          <IconWrapper>
            <PreviewPlayIcon width={48} height={48} stroke={color.white} />
          </IconWrapper>
        </ImageWrapper>
        <PaddingContainer>
          <Title>
            <span>{detail.title || detail.name}</span>
            <span>{detail.runtime}</span>
          </Title>
          <Overview>{detail.overview}</Overview>
        </PaddingContainer>
      </FlexContainer>
    </EpiContainer>
  );
};

export default EpisodeCard;
