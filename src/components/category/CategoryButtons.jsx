import * as S from './style';
import { InnerContainer } from '../../common/layout/InnerContainer';
import useMouseDragScroll from '../../hooks/useMouseDragScroll';
import CategoryButton from '../../ui/CategoryButton';

const CategoryButtons = ({ categories, currentCategory, onCategoryClick }) => {
  const scrollRef = useMouseDragScroll();

  return (
    <InnerContainer className="inner">
      <S.ButtonArea ref={scrollRef}>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            label={category.name}
            onClick={() => onCategoryClick(category.id)}
            isActive={category.id === currentCategory}
          />
        ))}
      </S.ButtonArea>
    </InnerContainer>
  );
};

export default CategoryButtons;
