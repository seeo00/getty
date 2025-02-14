import styled from 'styled-components';
import { color } from '../../styled/common';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 40;
`;

export const Wrap = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1240px;
  top: 5%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${color.gray[500]};
  overflow: hidden;
`;

export const ButtonWrap = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
`;

export const VisualWrap = styled.div`
  position: relative;
  height: 80%;
  background-color: #555;
`;

export const VisualContent = styled.div`
  width: 40%;
  position: absolute;
  bottom: 40px;
  left: 40px;
`;

export const TitleImg = styled.div`
  margin-bottom: 40px;
  background-color: #eee;
`;

export const ButtonControl = styled.div`
  display: flex;
  gap: 16px;
  button:nth-child(1) {
    margin-right: 16px;
  }
`;

export const ContentWrap = styled.div`
  padding-top: 40px;
`;
