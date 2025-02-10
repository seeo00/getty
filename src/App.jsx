// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import './reset.scss'; 
import { Main } from './pages';
import Auth from './pages/auth';  
import AuthLayout from './common/layout/AuthLayout';
import Layout from './common/layout/Layout';  

const Content = styled.div`   
  flex: 1;   
  padding: 0px;    
  color: #fff; 
`; 

function App() {   
  return (     
    <>       
      <BrowserRouter>         
        <GlobalStyle />         
        <Routes>           
          <Route path="/" element={<Layout />}>             
            <Route index element={<Main />} />           
          </Route>           
          <Route path="/auth" element={<AuthLayout />}>             
            <Route index element={<Auth />} />           
          </Route>         
        </Routes>       
      </BrowserRouter>     
    </>   
  ); 
}  

export default App;