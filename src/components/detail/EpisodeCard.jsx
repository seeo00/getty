// EpisodeSection.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisode } from '../../store/modules/thunks/getEpisode';
import SeasonDropdown from '../../ui/button/DropdownSelectButton';
import PreviewPlayIcon from '../../ui/icon/PreviewPlayIcon';
import { color } from '../../styled/common';
import * as S from './style';

const EpisodeSection = ({ tvId, initialSeason = '1' }) => {
  const dispatch = useDispatch();
  const [seasonNumber, setSeasonNumber] = useState(initialSeason);

  const {
    episodeData = [],
    currentPage = 1,
    loading = false,
    error = null,
    hasMore = false,
  } = useSelector((state) => state.episodeR || { episodeData: [] });

  // tvId 혹은 seasonNumber가 변경될 때마다 데이터를 새로 요청
  useEffect(() => {
    dispatch(getEpisode({ tvId, seasonNumber }));
  }, [dispatch, tvId, seasonNumber]);

  if (loading && (!episodeData || episodeData.length === 0)) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 찾을 수 없습니다: {error}</p>;
  if (!episodeData || episodeData.length === 0) return <p>에피소드가 없습니다.</p>;

  const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';

  return (
    <>
      <SeasonDropdown
        defaultSeason={`시즌 ${seasonNumber}`}
        onSelect={(selectedSeason) => {
          const newSeason = selectedSeason.replace('시즌 ', '');
          setSeasonNumber(newSeason);
          dispatch(getEpisode({ tvId, seasonNumber: newSeason }));
        }}
      />
      {episodeData.map((episode) => (
     <>
     	   <S.EpiContainer key={episode.id}>
	          <S.FlexContainer>
	            <S.ImageWrapper>
	              <S.Image src={`${imageBaseUrl}${episode.still_path}`} alt={episode.name || '에피소드 이미지'} />
	              <S.IconWrapper>
	                <PreviewPlayIcon width={48} height={48} stroke={color.white} />
	              </S.IconWrapper>
	            </S.ImageWrapper>
	            <S.PaddingContainer>
	              <S.Title>
	                <span>
	                  {episode.episode_number}화&nbsp;&nbsp;{episode.title || episode.name}
	                </span>
	                {episode.runtime && <span>{episode.runtime}분</span>}
	              </S.Title>
	              <S.Overview>{episode.overview}</S.Overview>
	            </S.PaddingContainer>
	          </S.FlexContainer>
	        </S.EpiContainer>
     </>
      ))}
    </>
  );
};

export default EpisodeSection;
