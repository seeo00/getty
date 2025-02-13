import styled from 'styled-components';

export const PlanTitle = styled.h2`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 29px 190px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: white;
  background: ${(props) =>
    props.isSelected
      ? 'radial-gradient(83.44% 54.97% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%)'
      : '#494949'};
  border-radius: 16px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1279px) {
    // 태블릿 & 모바일 스타일이 필요하다면 여기에 추가
  }
`;

export const CardContainer = styled.div`
  @media (min-width: 1280px) {
    // 데스크탑
    width: 400px;
    height: 748px;
    padding: 10px;
    margin: 0;
    background-color: #3d3d3d;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    .mobile-only {
      display: none;
    }

    &:hover ${PlanTitle} {
      background: radial-gradient(83.44% 54.97% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%);
    }
  }

  @media (max-width: 1279px) {
    // 태블릿 & 모바일
    width: 100%;
    height: 6rem;
    background: none;
    padding: 0;
    box-sizing: border-box;

    .desktop-only {
      display: none;
    }
  }
`;

export const PlanButton = styled.button`
  flex: 1;
  width: 100%;
  height: 6rem;
  padding: 0;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  color: white;
  background: ${(props) =>
    props.isSelected
      ? 'radial-gradient(83.44% 54.97% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%)'
      : '#494949'};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: radial-gradient(83.44% 54.97% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%);
  }
`;
