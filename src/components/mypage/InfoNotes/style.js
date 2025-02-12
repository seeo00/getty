import styled from 'styled-components';

export const NotesContainer = styled.div`
  margin-top: 40px;
`;

export const NoteText = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13.3px;
  line-height: 1.5;

  & + & {
    margin-top: 10px;
  }
`;
