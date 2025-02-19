import {
  NavHomeIcon,
  NavPopularIcon,
  NavLatestIcon,
  NavOriginalIcon,
  NavDramaIcon,
  NavMovieIcon,
  NavRealityIcon,
  NavAnimationIcon,
  NavDocumentaryIcon,
} from '../../ui/icon';

export const navData = [
  {
    id: 1,
    text: '홈',
    icon: NavHomeIcon,
    link: '/',
  },
  {
    id: 2,
    text: '인기',
    icon: NavPopularIcon,
    link: '/category/popular',
  },
  {
    id: 3,
    text: '최신',
    icon: NavLatestIcon,
    link: '/category/latest',
  },
  {
    id: 4,
    text: '오리지널',
    icon: NavOriginalIcon,
    link: '/category/original',
  },
  {
    id: 5,
    text: '드라마',
    icon: NavDramaIcon,
    link: '/category/drama',
  },
  {
    id: 6,
    text: '영화',
    icon: NavMovieIcon,
    link: '/category/movie',
  },
  {
    id: 7,
    text: '예능',
    icon: NavRealityIcon,
    link: '/category/reality',
  },
  {
    id: 8,
    text: '애니',
    icon: NavAnimationIcon,
    link: '/category/animation',
  },
  {
    id: 9,
    text: '시사다큐',
    icon: NavDocumentaryIcon,
    link: '/category/documentary',
  },
];
