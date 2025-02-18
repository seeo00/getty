import styled from 'styled-components';
import { color } from '../../../styled/common';
import { respondTo } from '../../../styled/GlobalStyle';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 114px;

  ${respondTo('tablet')} {
    margin-top: 176.5px;
  }

  ${respondTo('desktop')} {
    margin-top: 296px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${color.white};
  margin-bottom: 8px;
  text-align: center;

  ${respondTo('tablet')} {
    font-size: 24px;
    margin-bottom: 16px;
  }
  ${respondTo('desktop')} {
    font-size: 28px;
    margin-bottom: 16px;
  }
`;

export const Subtitle = styled.p`
  color: ${color.gray[20]};
  margin-bottom: 40px;
  text-align: center;
  font-size: 14px;

  ${respondTo('tablet')} {
    font-size: 20px;
    margin-bottom: 80px;
  }
  ${respondTo('desktop')} {
    font-size: 20px;
    margin-bottom: 80px;
  }
`;

export const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  place-items: center;

  ${respondTo('tablet')} {
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
`;

export const ProfileItem = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const ProfileCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: ${color.gray[600]};
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

  ${respondTo('tablet')} {
    width: 160px;
    height: 160px;
    margin-bottom: ${(props) => (props.$editPage ? '40px' : '16px')};
  }

  ${respondTo('desktop')} {
    width: 160px;
    height: 160px;
    margin-bottom: ${(props) => (props.$editPage ? '40px' : '16px')};
  }
`;

export const AddProfileCircle = styled(ProfileCircle)`
  background-color: transparent;
  border: 1px solid ${color.gray[600]};

  &:hover {
    border-color: ${color.primary[300]};
  }
`;

export const ProfileName = styled.span`
  font-size: 14px;
  color: ${color.white};
  display: block;

  ${respondTo('tablet')} {
    font-size: 20px;
  }
  ${respondTo('desktop')} {
    font-size: 20px;
  }
`;

export const ProfileButtonWrapper = styled.div`
  height: 36px;
  margin: 40px auto 226px;

  ${respondTo('tablet')} {
    height: 54px;
    margin: 80px auto 291.5px;
  }

  ${respondTo('desktop')} {
    height: 54px;
    margin: 96px auto 296px;
  }
`;

// 프로필 편집화면

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
  ${respondTo('tablet')} {
    margin: 0 auto 80px;
    font-size: 24px;
  }

  ${respondTo('desktop')} {
    margin: 0 auto 80px;
    font-size: 28px;
  }
`;

export const NameInputWrapper = styled.div`
  width: 100%;
  max-width: 358px;
  margin-bottom: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${respondTo('tablet')} {
    max-width: 536px;
    margin-bottom: 148px;
  }
  ${respondTo('desktop')} {
    max-width: 536px;
    margin-bottom: 148px;
  }
`;

export const NameInput = styled.input`
  width: 100%;
  height: 53px;
  background-color: ${color.gray[600]};
  border: 1px solid ${color.gray[500]};
  border-radius: 8px;
  color: ${color.white};
  padding: 0 15px;
  font-size: 16px;

  &::placeholder {
    color: ${color.gray[400]};
  }

  &:focus {
    outline: none;
    border-color: ${color.primary[300]};
  }
`;

export const ProfileImageUpload = styled.div`
  position: relative;
`;

export const EditIconOverlay = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background: ${color.primary[300]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 373px;

  ${respondTo('tablet')} {
    margin-bottom: 453px;
  }

  ${respondTo('desktop')} {
    margin-bottom: 255px;
  }
`;
