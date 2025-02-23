import * as S from './style';
import useMouseDragScroll from '../../hooks/useMouseDragScroll';
import CategoryButton from '../../ui/button/CategoryButton';

const CategoryButtons = ({ categories, currentCategory, onCategoryClick }) => {
  const scrollRef = useMouseDragScroll();

  return (
    <S.ButtonContainer ref={scrollRef}>
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          label={category.name}
          onClick={() => onCategoryClick(category.id)}
          isActive={category.id === currentCategory}
        />
      ))}
    </S.ButtonContainer>
  );
};

export default CategoryButtons;
