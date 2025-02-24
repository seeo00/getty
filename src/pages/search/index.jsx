import * as S from './style';
import { color } from '../../styled/common';
import { AlertIcon } from '../../ui/icon';
import { useState } from 'react';
import { CategoryButtons } from '../../components';

const categories = [
  { id: 'base', name: '추천' },
  { id: 'romance', name: '로맨스' },
  { id: 'comedy', name: '코미디' },
  { id: 'fantasy', name: 'SF/판타지' },
  { id: 'mystery', name: '미스터리/스릴러' },
  { id: 'crime', name: '범죄' },
  { id: 'sports', name: '스포츠' },
  { id: 'history', name: '역사/전쟁/사극/시대극' },
  { id: 'life', name: '일상/학원/라이프' },
  { id: 'adventure', name: '모험/어드벤처' },
  { id: 'news', name: '시사' },
  { id: 'drama', name: '드라마' },
  { id: 'nature', name: '환경/자연' },
  { id: 'kids', name: '키즈' },
  { id: 'medical', name: '의학' },
  { id: 'lawyer', name: '정치/법정' },
  { id: 'office', name: '오피스' },
  { id: 'animation', name: '애니메이션' },
  { id: 'action', name: '액션' },
  { id: 'horror', name: '공포' },
  { id: 'documentary', name: '다큐멘터리' },
  { id: 'music', name: '음악' },
  { id: 'war', name: '전쟁' },
  { id: 'family', name: '가족' },
  { id: 'variety', name: '버라이어티' },
  { id: 'dating', name: '연애 리얼리티' },
  { id: 'food', name: '음식/요리' },
  { id: 'travel', name: '여행' },
  { id: 'survival', name: '서바이벌' },
  { id: 'game', name: '게임/퀴즈' },
  { id: 'talk', name: '토크' },
  { id: 'youth', name: '청춘' },
  { id: 'other', name: '기타' },
];

const Search = () => {
  const [activeCategory, setActiveCategory] = useState('base');
  return (
    <S.SearchContainer>
      <CategoryButtons categories={categories} currentCategory={activeCategory} onCategoryClick={setActiveCategory} />
      <S.SearchContent>
        <AlertIcon width="44px" height="44px" color={color.white} />
        <p>준비 중입니다.</p>
      </S.SearchContent>
    </S.SearchContainer>
  );
};

export default Search;
