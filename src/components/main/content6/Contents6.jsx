// src/components/main/content1/Contents6.jsx
import React from 'react';
import styled from 'styled-components';
import Contents6List from './Contents6List';
import { color } from '../../../styled/common';
import { Link } from 'react-router-dom';

const Contents6Wrap = styled.div`
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

export const Contents6 = () => {
  return (
    <Contents6Wrap>
      <HeaderBar>
        <Title>
          <span Link to="/">
            USER
          </span>
          님을 위한 추천 장르
        </Title>
        <MoreLink to="/">더보기 &gt;</MoreLink>
      </HeaderBar>
      <ContentArea>
        <Contents6List />
      </ContentArea>
    </Contents6Wrap>
  );
};

export default Contents6;
