import { getDrama } from '../../store/modules/thunks/getDrama';
import { getMovie } from '../../store/modules/thunks/getMovie';
import { getReality } from '../../store/modules/thunks/getReality';
import { getAnimation } from '../../store/modules/thunks/getAnimation';
import { getDocumentary } from '../../store/modules/thunks/getDocumentary';
import { dramaActions } from '../../store/modules/slices/dramaSlice';
import { movieActions } from '../../store/modules/slices/movieSlice';
import { realityActions } from '../../store/modules/slices/realitySlice';
import { animationActions } from '../../store/modules/slices/animationSlice';
import { documentaryActions } from '../../store/modules/slices/documentarySlice';

export const genreData = [
  {
    id: 'drama',
    label: '드라마',
    slice: 'dramaR',
    fetchAction: getDrama,
    actions: dramaActions,
    categories: [
      { id: 'base', name: '추천' },
      { id: 'romance', name: '로맨스' },
      { id: 'mystery', name: '미스터리/스릴러' },
      { id: 'fantasy', name: 'SF/판타지' },
      { id: 'crime', name: '범죄/수사' },
      { id: 'history', name: '사극/시대극' },
      { id: 'comedy', name: '코미디' },
      { id: 'youth', name: '청춘' },
      { id: 'medical', name: '의학' },
      { id: 'lawyer', name: '정치/법정' },
      { id: 'office', name: '오피스' },
      { id: 'other', name: '기타' },
    ],
  },
  {
    id: 'movie',
    label: '영화',
    slice: 'movieR',
    fetchAction: getMovie,
    actions: movieActions,
    categories: [
      { id: 'base', name: '추천' },
      { id: 'romance', name: '로맨스' },
      { id: 'comedy', name: '코미디' },
      { id: 'animation', name: '애니메이션' },
      { id: 'mystery', name: '미스터리/스릴러' },
      { id: 'adventure', name: '모험' },
      { id: 'action', name: '액션' },
      { id: 'fantasy', name: 'SF/판타지' },
      { id: 'horror', name: '공포' },
      { id: 'documentary', name: '다큐멘터리' },
      { id: 'music', name: '음악' },
      { id: 'war', name: '전쟁' },
      { id: 'crime', name: '범죄' },
      { id: 'family', name: '가족' },
      { id: 'other', name: '기타' },
    ],
  },
  {
    id: 'reality',
    label: '예능',
    slice: 'realityR',
    fetchAction: getReality,
    actions: realityActions,
    categories: [
      { id: 'base', name: '추천' },
      { id: 'variety', name: '버라이어티' },
      { id: 'dating', name: '연애리얼리티' },
      { id: 'food', name: '음식/요리' },
      { id: 'travel', name: '여행' },
      { id: 'survival', name: '서바이벌' },
      { id: 'game', name: '게임/퀴즈' },
      { id: 'talk', name: '토크' },
    ],
  },
  {
    id: 'animation',
    label: '애니메이션',
    slice: 'animationR',
    fetchAction: getAnimation,
    actions: animationActions,
    categories: [
      { id: 'base', name: '추천' },
      { id: 'adventure', name: '모험/어드벤처' },
      { id: 'fantasy', name: 'SF/판타지' },
      { id: 'romance', name: '로맨스' },
      { id: 'comedy', name: '코미디' },
      { id: 'sports', name: '스포츠' },
      { id: 'mystery', name: '미스터리/스릴러' },
      { id: 'life', name: '일상/학원' },
      { id: 'kids', name: '키즈' },
      { id: 'other', name: '기타' },
    ],
  },
  {
    id: 'documentary',
    label: '시사다큐',
    slice: 'documentaryR',
    fetchAction: getDocumentary,
    actions: documentaryActions,
    categories: [
      { id: 'base', name: '추천' },
      { id: 'news', name: '시사' },
      { id: 'drama', name: '드라마' },
      { id: 'history', name: '역사/전쟁' },
      { id: 'nature', name: '환경/자연' },
      { id: 'crime', name: '범죄/실화' },
      { id: 'life', name: '라이프' },
      { id: 'sports', name: '스포츠' },
    ],
  },
];
