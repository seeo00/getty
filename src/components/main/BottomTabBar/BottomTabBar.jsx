import { useState } from 'react';
import { BottomTab } from './style.js';
import { FaHome, FaSearch, FaPlay, FaHeart, FaUser } from 'react-icons/fa';

const BottomTabBar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: <FaHome />, text: '홈' },
    { icon: <FaSearch />, text: '검색' },
    { icon: <FaPlay />, text: '방송' },
    { icon: <FaHeart />, text: '찜' },
    { icon: <FaUser />, text: 'MY' },
  ];

  const handleTabClick = (text, index) => {
    console.log(`${text} 탭 클릭됨`);
    setActiveTab(index);
  };

  return (
    <BottomTab>
      {tabs.map((tab, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: activeTab === index ? 'white' : '#888',
            cursor: 'pointer',
          }}
          onClick={() => handleTabClick(tab.text, index)}
        >
          {tab.icon}
          <span
            style={{
              fontSize: '12px',
              marginTop: '4px',
            }}
          >
            {tab.text}
          </span>
        </div>
      ))}
    </BottomTab>
  );
};

export default BottomTabBar;
