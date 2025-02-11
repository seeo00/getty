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
  background-color: #494949;
  border-radius: 16px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
  @media (min-width: 900px) {
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
      background: radial-gradient(83.44% 54.97% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%),
        linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    }
  }

  @media (max-width: 899px) {
    width: 32%;
    background: none;
    padding: 0;
    
    .desktop-only {
      display: none;
    }
  }
`;

export const PlanButton = styled.button`
  width: 100%;
  padding: 20px 10px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: white;
  background: ${props => props.isSelected ? 
    'radial-gradient(83.44% 54.97% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%)' : 
    '#494949'};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: radial-gradient(83.44% 54.97% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%);
  }
`;