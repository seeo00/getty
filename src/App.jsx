import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          {/* 라우터 설정 */}
          <Route path="/" element={<div>연결 확인</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
