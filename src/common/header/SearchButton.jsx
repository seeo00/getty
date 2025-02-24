import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { SearchIcon, AlertErrorIcon } from '../../ui/icon';
import { color } from '../../styled/common';

const SearchButton = ({ isActive, setIsActive, searchText, setSearchText }) => {
  const navigate = useNavigate();

  const handleOpenSearch = () => {
    navigate('/search');
  };

  return (
    <S.SearchContainer $active={isActive}>
      <S.SearchButton onClick={handleOpenSearch} $active={isActive}>
        <SearchIcon color={color.gray[70]} />
      </S.SearchButton>
      <S.SearchInput
        type="text"
        placeholder="제목, 사람, 장르 검색"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        $active={isActive}
        disabled={!isActive}
      />
      {searchText.length > 0 && (
        <S.ClearButton onClick={() => setSearchText('')}>
          <AlertErrorIcon stroke={color.gray[70]} />
        </S.ClearButton>
      )}
    </S.SearchContainer>
  );
};

export default SearchButton;
