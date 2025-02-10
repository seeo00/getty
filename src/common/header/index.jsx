import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { HeaderWrap } from './style';

const Header = () => {
    return (
        <HeaderWrap>
            <div className="header_inner">
                <h1>
                    <Link to="/">
                        <img src="./logo.svg" alt="" />
                    </Link>
                </h1>
                <NavBar />
            </div>
        </HeaderWrap>
    );
};

export default Header;
