// SeasonDropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ArrowDownIcon from '../../ui/icon/ArrowDownIcon';
import { color } from '../../styled/common';
import { getDetails } from '../../store/modules/thunks/getDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { respondTo } from '../../styled/GlobalStyle';

const DropdownWrapper = styled.div`
  display: block;
  text-align: left;
  position: relative;
  margin: 16px 0;
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
		};
		${respondTo('tablet')} {
			font-size: 14px;
		};
		${respondTo('mobile')} {
			font-size: 14px;
		};
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 3px);
  left: 0;
  width: 100%;
  background: ${color.gray[800]};
  border: 1px solid ${color.gray[70]};
  border-radius: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 10;
  width: 120px;
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
    border-radius: 8px;
  }
`;

const SeasonDropdown = ({ seasons, onSelect, defaultSeason, icon: CustomIcon, ...props }) => {
  const dispatch = useDispatch();
  const { detailType, detailID } = useParams();
  const { detailsData, loading, error } = useSelector((state) => state.detailsR);

  useEffect(() => {
    if (!detailsData) {
      dispatch(getDetails({ id: detailID, contentType: detailType }));
    }
  }, [dispatch, detailsData, detailID, detailType]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 찾을 수 없습니다.</p>;
  if (!detailsData) return null;

  const seasonsData = detailsData.seasons;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(defaultSeason || (seasonsData && seasonsData[0]));
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

  const handleSelect = (season) => {
    setSelectedSeason(season);
    setIsOpen(false);
    if (onSelect) onSelect(season);
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownSelectButton onClick={() => setIsOpen((prev) => !prev)} {...props}>
        <ButtonText>
				{typeof selectedSeason === 'object' ? selectedSeason.name : selectedSeason}
				</ButtonText>
        <IconWrapper>
            <ArrowDownIcon width={16} height={16}  color={color.gray[70]} />
        </IconWrapper>
      </DropdownSelectButton>
      {isOpen && (
        <DropdownList>
          {seasonsData.map((season, index) => (
            <DropdownListItem key={index} onClick={() => handleSelect(season)}>
              {season.name}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default SeasonDropdown;
