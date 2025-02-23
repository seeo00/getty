import * as S from '../style';
import { getDocumentary } from '../../../store/modules/thunks/getDocumentary.js';
import { documentaryActions } from '../../../store/modules/slices/documentarySlice';
import { useCategoryContent } from '../../../hooks/useCategoryContent.js';
import { CategoryButtons } from '../../../components/index.jsx';
import { InnerContainer } from '../../../common/layout/InnerContainer.jsx';
import CardFlexList from '../../../ui/card/CardFlexList.jsx';

const Documentary = () => {
  const { contentData, currentCategory, loading, onCategoryClick, lastElementRef } = useCategoryContent({
    getData: getDocumentary,
    actions: documentaryActions,
    selector: (state) => state.documentaryR,
    dataKey: 'documentaryData',
  });

  const categories = [
    { id: 'base', name: '추천' },
    { id: 'news', name: '시사' },
    { id: 'drama', name: '드라마' },
    { id: 'history', name: '역사/전쟁' },
    { id: 'nature', name: '환경/자연' },
    { id: 'crime', name: '범죄/실화' },
    { id: 'life', name: '라이프' },
    { id: 'sports', name: '스포츠' },
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

export default Documentary;
