import styled from 'styled-components';
import { color } from '../../styled/common';
import { respondTo } from '../../styled/GlobalStyle';

export const PageWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 74px 0 55px 0;

  ${respondTo('desktop')} {
    max-width: 1280px;
  }

  ${respondTo('tablet')} {
    max-width: 744px;
  }

  ${respondTo('mobile')} {
    max-width: 390px;
  }
`;

export const TitleSection = styled.div`
  margin-bottom: 32px;
`;

export const MainTitle = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 500;
  margin: 0 0 20px 0;

  ${respondTo('tablet')} {
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    margin: 20px 0 12px 0;
    padding: 0;
  }

  ${respondTo('mobile')} {
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    margin: 20px 0 12px 0;
    padding: 0;
  }
`;

export const SubTitle = styled.div`
  color: ${color.white};
  margin-bottom: 40px;
  font-size: 24px;

  ${respondTo('tablet')} {
    font-size: 16px;
    text-align: left;
    margin-bottom: 60px;
    padding: 0;
    display: block;
  }

  ${respondTo('mobile')} {
    font-size: 16px;
    text-align: left;
    margin-bottom: 60px;
    padding: 0;
    display: block;
  }
`;

export const PlansGrid = styled.div`
  ${respondTo('desktop')} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  ${respondTo('tablet')} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
  }

  ${respondTo('mobile')} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  ${respondTo('desktop')} {
    display: contents;
  }

  ${respondTo('tablet')} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    padding: 0;
    margin-bottom: 38px;
  }

  ${respondTo('mobile')} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
    padding: 0;
    margin-bottom: 38px;
  }
`;

export const MobileContentWrapper = styled.div`
  display: none;

  ${respondTo('tablet')} {
    display: block;
    width: 100%;
    margin: 20px 0 0;
  }

  ${respondTo('mobile')} {
    display: block;
    width: 100%;
    margin: 20px 0 0;
  }
`;

export const NotesContainer = styled.div`
  margin-top: 40px;
`;

export const NoteText = styled.div`
  color: ${color.gray[200]};
  font-size: 13.3px;
  line-height: 1.5;

  & + & {
    margin-top: 10px;
  }

  ${respondTo('tablet')} {
    font-size: 12px;
    & + & {
      margin-top: 12px;
    }
  }

  ${respondTo('mobile')} {
    font-size: 12px;
    & + & {
      margin-top: 12px;
    }
  }
`;
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
      ? 'radial-gradient(54.97% 83.44% at 23.41% 78.7%, #0040FF 0%, #00279C 72%, #00238A 100%) '
      : color.gray[600]};
  border-radius: 16px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
  ${respondTo('desktop')} {
    width: 400px;
    height: 748px;
    padding: 10px;
    margin: 0;
    background-color: ${color.gray[500]};
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    .mobile-only {
      display: none;
    }

    &:hover ${PlanTitle} {
      background: radial-gradient(54.97% 83.44% at 23.41% 78.7%, #0040FF 0%, #00279C 72%, #00238A 100%) 
      );
    }
  }

  ${respondTo('tablet')} {
    width: 100%;
    height: 96px;
    background: none;
    padding: 0;
    box-sizing: border-box;

    .desktop-only {
      display: none;
    }
  }

  ${respondTo('mobile')} {
    width: 100%;
    height: 96px;
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
  height: 96px;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: white;
  background: ${(props) =>
    props.isSelected
      ? 'radial-gradient(54.97% 83.44% at 23.41% 78.7%, #0040FF 0%, #00279C 72%, #00238A 100%) '
      : '${color.gray[600]}'};
  border: ${(props) => (props.isSelected ? 'none' : `1px solid ${color.gray[90]}`)};
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: radial-gradient(radial-gradient(54.97% 83.44% at 23.41% 78.7%, #0040ff 0%, #00279c 72%, #00238a 100%));
  }
`;

export const RowContainer = styled.div`
  ${respondTo('desktop')} {
    padding: 10px 0 7px 0;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 330px;
      height: 2px;
      background-color: ${color.gray[90]};
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  ${respondTo('tablet')} {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 14px 0;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${color.gray[90]};
    }
  }

  ${respondTo('mobile')} {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 14px 0;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${color.gray[90]};
    }
  }
`;

export const RowContent = styled.div`
  ${respondTo('desktop')} {
    display: flex;
    margin-left: 39px;
    flex-direction: column;
    gap: 4px;
  }

  ${respondTo('tablet')} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${respondTo('mobile')} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  color: ${color.gray[70]};
  line-height: 1.4;

  ${respondTo('tablet')} {
    &:last-child {
      text-align: right;
    }
    font-size: 14px;
  }

  ${respondTo('mobile')} {
    &:last-child {
      text-align: right;
    }
    font-size: 14px;
  }
`;

export const ExtraInfo = styled.div`
  ${respondTo('desktop')} {
    font-size: 16px;
    color: ${color.gray[70]};
    margin-top: 4px;
    margin-left: 39px;
    line-height: 1.4;
  }

  ${respondTo('tablet')} {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    color: ${color.gray[70]};
    line-height: 1.4;
    text-align: right;
  }

  ${respondTo('mobile')} {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    color: ${color.gray[70]};
    line-height: 1.4;
    text-align: right;
  }
`;

// MODAL
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.gray[800]};
  backdrop-filter: blur(10px);
  z-index: 50;
`;

export const ModalContainer = styled.div`
  width: 696px;
  height: 743px;
  background-color: ${color.gray[500]};
  border-radius: 16px;

  ${respondTo('tablet')} {
    width: 600px;
    height: 650px;
  }

  ${respondTo('mobile')} {
    width: 320px;
    height: 430px;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  margin: 120px auto 60px;
  color: ${color.gray[10]};

  ${respondTo('tablet')} {
    margin: 100px auto 50px;
    font-size: 20px;
  }

  ${respondTo('mobile')} {
    margin: 50px auto 30px;
    font-size: 16px;
  }
`;

export const SubscriptionCard = styled.div`
  position: relative;
  display: flex;
  background: transparent;
`;

export const SubscriptionCardLeft = styled.div`
  flex: 3;
  background-color: ${color.gray[100]};
  width: 422px;
  height: 214px;
  border-radius: 16px;
  margin-left: 85px;
  padding: 40px;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px ${color.gray[500]};
  z-index: 1;

  ${respondTo('tablet')} {
    width: 270px;
    height: 190px;
    margin-left: 110px;
    padding: 20px;
  }

  ${respondTo('mobile')} {
    width: 180px;
    height: 130px;
    margin-left: 40px;
    padding: 10px;
  }
`;

export const SubscriptionCardRight = styled.div`
  flex: 1;
  background-color: ${color.gray[100]};
  width: 103px;
  border-radius: 16px;
  margin-right: 86px;
  padding: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px ${color.gray[500]};
  position: relative;
  left: -1px;

  ${respondTo('tablet')} {
    width: 150px;
    margin-right: 110px;
    padding: 5px;
  }

  ${respondTo('mobile')} {
    width: 170px;
    margin-right: 40px;
    padding: 3px;
  }
`;

export const SubscriptionCardTitle = styled.div`
  margin-bottom: 8px;
  color: ${color.gray[10]};
  font-size: 24px;
  font-weight: 400;

  ${respondTo('tablet')} {
    font-size: 20px;
    margin-bottom: 6px;
  }

  ${respondTo('mobile')} {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const SubscriptionRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
  color: ${color.gray[20]};
  width: 100%;
  span:first-child {
    margin-right: 20px; // 간격 줄임
    min-width: 70px;
    flex-shrink: 0; // 축소 방지
  }

  span:last-child {
    white-space: nowrap; // 줄바꿈 방지
    overflow: hidden;
    text-overflow: clip; // 말줄임표 대신 그냥 자름
    flex-grow: 1;
  }

  ${respondTo('tablet')} {
    font-size: 14px;
    margin-bottom: 6px;

    span:first-child {
      margin-right: 50px;
      min-width: 80px;
    }
  }

  ${respondTo('mobile')} {
    font-size: 12px;
    margin-bottom: 4px;

    span:first-child {
      margin-right: 10px;
      min-width: 50px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 525px;
  margin-top: 80px;
  margin-left: 50%;
  transform: translateX(-50%);

  ${respondTo('tablet')} {
    width: 450px;
    margin-top: 60px;
  }

  ${respondTo('mobile')} {
    width: 300px;
    margin-top: 40px;
  }

  & > button {
    height: 60px;

    ${respondTo('tablet')} {
      height: 50px;
    }

    ${respondTo('mobile')} {
      height: 40px;
    }
  }
`;

export const AutoMoveText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 200;
  color: ${color.gray[40]};
  margin-top: 40px;

  ${respondTo('tablet')} {
    font-size: 12px;
    margin-top: 30px;
  }

  ${respondTo('mobile')} {
    font-size: 10px;
    margin-top: 20px;
  }
`;
