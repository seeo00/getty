// src/components/main/content1/Contents5.jsx
import React from 'react';
import styled from 'styled-components';
import Contents5List from './Contents5List';
import { color } from '../../../styled/common';
import { Link } from 'react-router-dom';

const Contents5Wrap = styled.div`
  padding: 0 116px;
  margin: 0 auto;
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 400;
  margin: 0;
`;

const MoreLink = styled.a`
  font-size: 14px;
  color: ${color.gray[70]};
  text-decoration: none;
  cursor: pointer;
`;

const ContentArea = styled.div`
  /* 슬라이더 영역 */
`;

export const Contents5 = () => {
  return (
    <Contents5Wrap>
      <HeaderBar>
        <Title>관심 콘텐츠</Title>
        <MoreLink to="/target-path">더보기 &gt;</MoreLink>
      </HeaderBar>
      <ContentArea>
        <Contents5List />
      </ContentArea>
    </Contents5Wrap>
  );
};

export default Contents5;
