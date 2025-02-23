import * as S from './style';
import { Link } from 'react-router-dom';
import { AlertIcon, ArrowRightIcon } from '../../ui/icon';
import { color } from '../../styled/common';
import { useState, useEffect } from 'react';
import TabContent from './TabContent';

const MypageContent = () => {
  const [activeTab, setActiveTab] = useState('watchHistory');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <S.SectionContainer>
            <S.SectionHeader>
              <h3>최근 본 콘텐츠</h3>
              <Link>
                <span className="blind">더보기</span>
                <ArrowRightIcon color={color.gray[40]} />
              </Link>
            </S.SectionHeader>
            <S.SectionContent>
              <AlertIcon width="44px" height="44px" color={color.white} />
              <p>준비 중입니다.</p>
            </S.SectionContent>
          </S.SectionContainer>

          <S.SectionContainer>
            <S.SectionHeader>
              <h3>관심 콘텐츠</h3>
              <Link>
                <span className="blind">더보기</span>
                <ArrowRightIcon size={20} color={color.gray[40]} />
              </Link>
            </S.SectionHeader>
            <S.SectionContent>
              <AlertIcon width={44} height={44} color={color.white} />
              <p>준비 중입니다.</p>
            </S.SectionContent>
          </S.SectionContainer>

          <S.ContentList>
            <li>
              <Link>
                <h3>활동내역</h3>
                <span>
                  <span className="blind">더보기</span>
                  <ArrowRightIcon />
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <h3>계정관리</h3>
                <span>
                  <span className="blind">더보기</span>
                  <ArrowRightIcon />
                </span>
              </Link>
            </li>
            <li>
              <button>
                <h3>로그아웃</h3>
                <span>
                  <span className="blind">더보기</span>
                  <ArrowRightIcon />
                </span>
              </button>
            </li>
          </S.ContentList>
        </>
      ) : (
        <>
          <S.TabContainer>
            <S.TabButton onClick={() => setActiveTab('watchHistory')}>
              <S.TabText active={activeTab === 'watchHistory'}>최근 본 콘텐츠</S.TabText>
            </S.TabButton>
            <S.TabButton onClick={() => setActiveTab('favorites')}>
              <S.TabText active={activeTab === 'favorites'}>관심 콘텐츠</S.TabText>
            </S.TabButton>
            <S.TabButton onClick={() => setActiveTab('activity')}>
              <S.TabText active={activeTab === 'activity'}>활동 내역</S.TabText>
            </S.TabButton>
            <S.TabButton onClick={() => setActiveTab('setting')}>
              <S.TabText active={activeTab === 'setting'}>계정 관리</S.TabText>
            </S.TabButton>
          </S.TabContainer>

          <TabContent activeTab={activeTab} />
        </>
      )}
    </>
  );
};

export default MypageContent;
