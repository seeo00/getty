// src/components/main/content1/Contents1.jsx
import React from 'react';
import styled from 'styled-components';
import Contents1List from './Contents1List';
import { color } from '../../../styled/common';
import { Link } from 'react-router-dom';

const Contents1Wrap = styled.div`
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

export const Contents1 = () => {
  return (
    <Contents1Wrap>
      <HeaderBar>
        <Title>오리지널 대표 콘텐츠</Title>
        <MoreLink to="/target-path">더보기 &gt;</MoreLink>
      </HeaderBar>
      <ContentArea>
        <Contents1List />
      </ContentArea>
    </Contents1Wrap>
  );
};

export default Contents1;
