import * as S from './style';
import { Link } from 'react-router-dom';
import { HealingIcon, PencilIcon, SnowCloudIcon, SoloContentIcon, TwoStarsIcon } from '../../ui/icon';
import { useSelector } from 'react-redux';

const textItems = [
  { id: 1, text: '현실보다 더 현실 같은 이야기', icon: TwoStarsIcon, section: 'realisticContent' },
  { id: 2, text: '픽셀 너머의 이야기', icon: SoloContentIcon, section: 'animationContent' },
  { id: 3, text: '우울한 날 추천 콘텐츠', icon: SnowCloudIcon, section: 'comedyContent' },
  { id: 4, text: '온 가족이 함께 즐기는 콘텐츠', icon: HealingIcon, section: 'familyContent' },
];

const RecTextList = ({ title }) => {
  const { authed } = useSelector((state) => state.authR);

  return (
    <section>
      <S.SectionHeader>
        <h2>{title}</h2>
      </S.SectionHeader>
      <S.ContentList>
        {textItems.map(({ id, text, icon: Icon, section }) => (
          <li key={id}>
            <Link to={`/more?section=${section}&title=${encodeURIComponent(text)}`}>
              <Icon />
              <span>{text}</span>
            </Link>
          </li>
        ))}
        {authed && (
          <li>
            <Link to="/mypage">
              <PencilIcon />
              <span>시청을 완료했다면?</span>
            </Link>
          </li>
        )}
      </S.ContentList>
    </section>
  );
};

export default RecTextList;
