// SortAndCountDropdown.jsx
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { color } from '../../styled/common';
import ArrowDownIcon from '../../ui/icon/ArrowDownIcon';
import { respondTo } from '../../styled/GlobalStyle';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${respondTo('desktop')} {
    margin: 16px 0 75px 0;
  }
  ${respondTo('tablet')} {
    margin: 16px 0 30px 0;
  }
  ${respondTo('mobile')} {
    margin: 16px 0 30px 0;
  }
`;

const ReviewCount = styled.button`
  background: transparent;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  cursor: default;
  color: ${color.gray[70]};
  ${respondTo('desktop')} {
    font-size: 16px;
  }
  ${respondTo('tablet')} {
    font-size: 14px;
  }
  ${respondTo('mobile')} {
    font-size: 14px;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  max-width: 120px;
  width: 100%;
`;

const DropdownSelectButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 14px;
  border: 1px solid ${color.gray[70]};
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  width: 120px;
`;

const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${color.gray[70]};
  ${respondTo('desktop')} {
    font-size: 16px;
  }
  ${respondTo('tablet')} {
    font-size: 14px;
  }
  ${respondTo('mobile')} {
    font-size: 14px;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 3px);
  left: 0;
  width: 120px;
  background: ${color.gray[800]};
  border: 1px solid ${color.gray[70]};
  border-radius: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 10;
`;

const DropdownListItem = styled.li`
  padding: 7px 0 7px 14px;
  font-size: 14px;
  font-weight: 400;
  color: ${color.gray[70]};
  cursor: pointer;
  width: 100%;
  text-align: left;
  border-radius: 8px;

  &:hover {
    background-color: ${color.gray[500]};
  }
  ${respondTo('desktop')} {
    font-size: 16px;
  }
  ${respondTo('tablet')} {
    font-size: 14px;
  }
  ${respondTo('mobile')} {
    font-size: 14px;
  }
`;

export const SortAndCountDropdown = ({ reviewCount, onSortLike, onSortDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('좋아요 순');
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedSort(option);
    setIsOpen(false);
    if (option === '베스트순' && onSortLike) {
      onSortLike();
    } else if (option === '날짜순' && onSortDate) {
      onSortDate();
    }
  };

  return (
    <Container>
      <ReviewCount>리뷰 {reviewCount}개</ReviewCount>
      <DropdownWrapper ref={dropdownRef}>
        <DropdownSelectButton onClick={() => setIsOpen((prev) => !prev)}>
          <ButtonText>{selectedSort}</ButtonText>
          <ArrowDownIcon width={16} height={16} color={color.gray[70]} />
        </DropdownSelectButton>
        {isOpen && (
          <DropdownList>
            <DropdownListItem onClick={() => handleSelect('베스트순')}>베스트순</DropdownListItem>
            <DropdownListItem onClick={() => handleSelect('날짜순')}>날짜순</DropdownListItem>
          </DropdownList>
        )}
      </DropdownWrapper>
    </Container>
  );
};
