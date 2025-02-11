import styled from 'styled-components';
export const RowContainer = styled.div`
  padding: 10px 0 7px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const RowContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Text = styled.span`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
`;

export const ExtraInfo = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
  line-height: 1.4;
`;
