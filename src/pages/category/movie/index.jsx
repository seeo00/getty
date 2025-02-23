import * as S from '../style';
import { getMovie } from '../../../store/modules/thunks/getMovie.js';
import { movieActions } from '../../../store/modules/slices/movieSlice.js';
import { useCategoryContent } from '../../../hooks/useCategoryContent.js';
import { CategoryButtons } from '../../../components/index.jsx';
import { InnerContainer } from '../../../common/layout/InnerContainer.jsx';
import CardFlexList from '../../../ui/card/CardFlexList.jsx';

const Movie = () => {
  const { contentData, currentCategory, loading, onCategoryClick, lastElementRef } = useCategoryContent({
    getData: getMovie,
    actions: movieActions,
    selector: (state) => state.movieR,
    dataKey: 'movieData',
  });

  const categories = [
    { id: 'base', name: '추천' },
    { id: 'romance', name: '로맨스' },
    { id: 'comedy', name: '코미디' },
    { id: 'animation', name: '애니메이션' },
    { id: 'mystery', name: '미스터리/스릴러' },
    { id: 'adventure', name: '모험' },
    { id: 'action', name: '액션' },
    { id: 'fantasy', name: 'SF/판타지' },
    { id: 'horror', name: '공포' },
    { id: 'documentary', name: '다큐멘터리' },
    { id: 'music', name: '음악' },
    { id: 'war', name: '전쟁' },
    { id: 'crime', name: '범죄' },
    { id: 'family', name: '가족' },
    { id: 'other', name: '기타' },
  ];

  return (
    <S.GenreWrap>
      <InnerContainer className="inner">
        <CategoryButtons categories={categories} currentCategory={currentCategory} onCategoryClick={onCategoryClick} />
      </InnerContainer>
      <InnerContainer>
        <CardFlexList items={contentData} loading={loading} lastElementRef={lastElementRef} />
      </InnerContainer>
    </S.GenreWrap>
  );
};

export default Movie;
