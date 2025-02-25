import styled from 'styled-components';
import { color } from '../../../styled/common';
import { respondTo } from '../../../styled/GlobalStyle';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 100vh;
  overflow-y: hidden;
  position: fixed;
  width: 100%;
  left: 0;

  ${respondTo('tabletMore')} {
    margin-top: 120px;
  }

  ${respondTo('desktop')} {
    margin-top: 190px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: ${color.white};
  margin-bottom: 8px;
  text-align: center;

  ${respondTo('tabletMore')} {
    font-size: 24px;
    margin-bottom: 16px;
  }

  ${respondTo('desktop')} {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  color: ${color.gray[20]};
  margin-bottom: 40px;
  text-align: center;
  font-size: 14px;

  ${respondTo('tabletMore')} {
    font-size: 20px;
    margin-bottom: 80px;
  }
`;

export const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  place-items: center;

  ${respondTo('tabletMore')} {
    gap: 80px;
  }

  ${respondTo('desktop')} {
    display: flex;
    justify-content: center;
    gap: 80px;

    & > div:nth-child(3) {
      display: none;
    }
  }
  &:has(> div:nth-child(1):last-child) {
    grid-template-columns: 1fr;

    ${respondTo('desktop')} {
      display: flex;
      justify-content: center;
    }
  }
`;

export const ProfileItem = styled.div`
  text-align: center;
  cursor: ${(props) => (props.$isAddProfile ? 'pointer' : 'default')};
`;

export const ProfileCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: ${color.gray[300]};
  margin-bottom: ${(props) => (props.$editPage ? '20px' : '8px')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  svg {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${(props) =>
    props.isEdit &&
    `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background:${color.gray[300]};
      border-radius: 100%;
    }
    
    svg {
      opacity: 1;
      z-index: 1;
    }
  `}

  ${respondTo('tabletMore')} {
    width: 160px;
    height: 160px;
    margin-bottom: ${(props) => (props.$editPage ? '40px' : '16px')};
  }
`;

export const AddProfileCircle = styled(ProfileCircle)`
  background-color: transparent;
  border: 1px solid ${color.gray[300]};

  &:hover {
    border-color: ${color.primary[300]};
  }
`;

export const ProfileName = styled.span`
  font-size: 14px;
  color: ${color.white};
  display: block;

  ${respondTo('tabletMore')} {
    font-size: 20px;
  }
`;

export const ProfileButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto 226px;

  ${respondTo('tabletMore')} {
    margin: 40px auto 371.5px;
  }

  ${respondTo('desktop')} {
    margin: 80px auto 296px;
  }

  & > button {
    width: fit-content;
    height: 36px;

    ${respondTo('tabletMore')} {
      height: 54px;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PageTitle = styled.h1`
  color: ${color.white};
  font-size: 20px;
  font-weight: 400;
  margin: 0 auto 40px;

  ${respondTo('tabletMore')} {
    margin: 0 auto 80px;
    font-size: 24px;
  }

  ${respondTo('desktop')} {
    font-size: 28px;
  }
`;

export const NameInputWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  margin-bottom: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${respondTo('tabletMore')} {
    max-width: 538px;
    margin-bottom: 120px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 358px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 36px;
  margin-bottom: 373px;
  gap: 8px;

  ${respondTo('tabletMore')} {
    margin-bottom: 453px;
    max-width: 536px;
  }

  ${respondTo('desktop')} {
    margin-bottom: 255px;
  }

  & > button {
    width: fit-content;
    height: 36px;

    ${respondTo('tabletMore')} {
      height: 54px;
    }
  }

  & > button:first-of-type:nth-last-of-type(3) {
    margin-right: auto;
  }
`;

// MODAL
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: ${color.gray[500]};
  border-radius: 16px;
  width: 376px;
  height: 238px;

  ${respondTo('desktop')} {
    width: 500px;
    height: 334px;
  }
`;

export const ModalTitle = styled.h2`
  color: ${color.white};
  font-size: 18px;
  font-weight: 400;
  margin: 40px 0 8px 0;
  text-align: center;

  ${respondTo('desktop')} {
    font-size: 20px;
    margin: 80px 0 16px 0;
  }
`;

export const ModalDescription = styled.p`
  color: ${color.white};
  font-size: 12px;
  text-align: left;
  margin-bottom: 40px;
  padding: 0 54px 0;

  ${respondTo('desktop')} {
    font-size: 14px;
    padding: 0 94px 0;
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;

  & > button {
    width: fit-content;
    height: 50px;
    margin-bottom: 40px;

    ${respondTo('desktop')} {
      gap: 32px;
      margin-bottom: 80px;
    }
  }
`;
