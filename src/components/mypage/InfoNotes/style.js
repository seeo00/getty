import styled from 'styled-components';

export const NotesContainer = styled.div`
  margin-top: 40px;
`;

export const NoteText = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8313rem;
  line-height: 1.5;

  & + & {
    margin-top: 0.625rem;
  }

  @media (max-width: 1279px) {
    // 태블릿 & 모바일
    font-size: 0.75rem;
    & + & {
      margin-top: 0.75rem;
    }
  }
`;
