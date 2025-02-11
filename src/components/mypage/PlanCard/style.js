// PlanCard/style.js
import styled from 'styled-components';

export const PlanTitle = styled.h2`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 29px 190px 29px 190px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: white;
  background-color: #494949;
  border-radius: 16px;
  transition: background-color 0.3s ease;
  display: flex; // flexbox 사용
  align-items: center; // 세로 중앙 정렬
  justify-content: center; // 가로 중앙 정렬
`;

export const CardContainer = styled.div`
  width: 400px;
  height: 748px;
  padding: 10px;
  margin: 0px;
  background-color: #3d3d3d;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  & > div {
    margin-top: 50px; // PlanTitle과 첫 번째 월 요금 사이 간격을 50px로 변경
  }

  &:hover ${PlanTitle} {
    background: radial-gradient(83.44% 54.97% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  }
`;
