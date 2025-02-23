import * as S from '../style';
import { getDrama } from '../../../store/modules/thunks/getDrama.js';
import { dramaActions } from '../../../store/modules/slices/dramaSlice.js';
import { useCategoryContent } from '../../../hooks/useCategoryContent.js';
import { CategoryButtons } from '../../../components/index.jsx';
import { InnerContainer } from '../../../common/layout/InnerContainer.jsx';
import CardFlexList from '../../../ui/card/CardFlexList.jsx';

const Drama = () => {
  const { contentData, currentCategory, loading, onCategoryClick, lastElementRef } = useCategoryContent({
    getData: getDrama,
    actions: dramaActions,
    selector: (state) => state.dramaR,
    dataKey: 'dramaData',
  });

  const categories = [
    { id: 'base', name: '추천' },
    { id: 'romance', name: '로맨스' },
    { id: 'mystery', name: '미스터리/스릴러' },
    { id: 'fantasy', name: 'SF/판타지' },
    { id: 'crime', name: '범죄/수사' },
    { id: 'history', name: '사극/시대극' },
    { id: 'comedy', name: '코미디' },
    { id: 'youth', name: '청춘' },
    { id: 'medical', name: '의학' },
    { id: 'lawyer', name: '정치/법정' },
    { id: 'office', name: '오피스' },
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

export default Drama;
