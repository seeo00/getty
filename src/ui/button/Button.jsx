import styled from 'styled-components';

const ButtonWrap = styled.button`
  width: ${(props) => props.width};
  padding: 10px 0;
  border: none;
  background-color: ${(props) => props.bgColor};
  font-size: 1.125rem;
  border-radius: 8px;
`;
// 자주사용하는 작은 조각들을 UI에 설정하기
// button, input, next버튼, prev버튼등등
const Button = ({ title, width, bgColor }) => {
  return (
    <ButtonWrap title={title} width={width} bgColor={bgColor}>
      {title || '버튼확인'}
    </ButtonWrap>
  );
};

export default Button;
