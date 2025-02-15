import styled from 'styled-components';
import { color } from '../../../styled/common';
import { respondTo } from '../../../styled/GlobalStyle';

export const Wrapper = styled.div`
  margin-top: 114px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
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
  font-size: 14px ;
   
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
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
   position: relative;
 svg {
   opacity: 0; 
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   transition: opacity 0.2s ease-in-out; 
 }
  ${ProfileItem}:hover & {
    box-shadow: 0 0 0 4px ${color.primary[300]};
      svg {
      opacity: 1;
    }
  }
  ${respondTo('tablet')} {
    width: 160px;  
    height: 160px;
    margin-bottom: 16px;
  }
  ${respondTo('desktop')} {
    width: 160px;
    height: 160px;
    margin-bottom: 16px;
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
   height:54px;
   margin: 80px auto 291.5px;
  }
     ${respondTo('desktop')} {
    height: 54px;
    margin: 96px auto 296px;
  }
`;