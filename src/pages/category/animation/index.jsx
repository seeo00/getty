import * as S from '../style';
import { getAnimation } from '../../../store/modules/thunks/getAnimation.js';
import { animationActions } from '../../../store/modules/slices/animationSlice.js';
import { useCategoryContent } from '../../../hooks/useCategoryContent.js';
import { CategoryButtons, CardContentList } from '../../../components/index.jsx';

const Animation = () => {
  const { contentData, currentCategory, loading, onCategoryClick, lastElementRef } = useCategoryContent({
    getData: getAnimation,
    actions: animationActions,
    selector: (state) => state.animationR,
    dataKey: 'animationData',
  });

  const categories = [
    { id: 'base', name: '추천' },
    { id: 'adventure', name: '모험/어드벤처' },
    { id: 'fantasy', name: 'SF/판타지' },
    { id: 'romance', name: '로맨스' },
    { id: 'comedy', name: '코미디' },
    { id: 'sports', name: '스포츠' },
    { id: 'mystery', name: '미스터리/스릴러' },
    { id: 'life', name: '일상/학원' },
    { id: 'kids', name: '키즈' },
    { id: 'other', name: '기타' },
  ];

  return (
    <S.GenreWrap>
      <CategoryButtons categories={categories} currentCategory={currentCategory} onCategoryClick={onCategoryClick} />
      <CardContentList data={contentData} loading={loading} lastElementRef={lastElementRef} />
    </S.GenreWrap>
  );
};

export default Animation;
