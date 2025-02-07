import { BottomTab } from './styles';
import { FaHome, FaSearch, FaHeart, FaUser, FaPlay } from 'react-icons/fa';

const BottomTabBar = () => {
    const tabs = [
        { icon: <FaHome />, text: '홈' },
        { icon: <FaSearch />, text: '검색' },
        { icon: <FaPlay />, text: '방송' },
        { icon: <FaHeart />, text: '찜' },
        { icon: <FaUser />, text: 'MY' },
    ];

    return (
        <BottomTab>
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'white',
                    }}
                >
                    {tab.icon}
                    <span style={{ fontSize: '12px', marginTop: '4px' }}>{tab.text}</span>
                </div>
            ))}
        </BottomTab>
    );
};

export default BottomTabBar;
