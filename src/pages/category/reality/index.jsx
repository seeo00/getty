import * as S from '../style';
import { getReality } from '../../../store/modules/thunks/getReality.js';
import { realityActions } from '../../../store/modules/slices/realitySlice.js';
import { useCategoryContent } from '../../../hooks/useCategoryContent.js';
import { CategoryButtons, CardContentList } from '../../../components/index.jsx';

const Reality = () => {
  const { contentData, currentCategory, loading, onCategoryClick, lastElementRef } = useCategoryContent({
    getData: getReality,
    actions: realityActions,
    selector: (state) => state.realityR,
    dataKey: 'realityData',
  });

  const categories = [
    { id: 'base', name: '추천' },
    { id: 'variety', name: '버라이어티' },
    { id: 'dating', name: '연애리얼리티' },
    { id: 'food', name: '음식/요리' },
    { id: 'travel', name: '여행' },
    { id: 'survival', name: '서바이벌' },
    { id: 'game', name: '게임/퀴즈' },
    { id: 'talk', name: '토크' },
  ];

  return (
    <S.GenreWrap>
      <CategoryButtons categories={categories} currentCategory={currentCategory} onCategoryClick={onCategoryClick} />
      <CardContentList data={contentData} loading={loading} lastElementRef={lastElementRef} />
    </S.GenreWrap>
  );
};

export default Reality;
