import * as S from './style';
import { Link } from 'react-router-dom';
import { HealingIcon, PencilIcon, SnowCloudIcon, SoloContentIcon, TwoStarsIcon } from '../../ui/icon';

const textItems = [
  { id: 1, text: '평점이 높은 화제작', icon: TwoStarsIcon },
  { id: 2, text: '혼자 즐기기 좋은 콘텐츠', icon: SoloContentIcon },
  { id: 3, text: '겨울에 어울리는 추천 콘텐츠', icon: SnowCloudIcon },
  { id: 4, text: '힐링이 필요한 날 추천 콘텐츠', icon: HealingIcon },
  { id: 5, text: '시청을 완료했다면?', icon: PencilIcon },
];

const RecTextList = ({ title }) => {
  return (
    <section>
      <S.SectionHeader>
        <h2>{title}</h2>
      </S.SectionHeader>
      <S.ContentList>
        {textItems.map(({ id, text, icon: Icon }) => (
          <li key={id}>
            <Link to={'#'}>
              <Icon />
              <span>{text}</span>
            </Link>
          </li>
        ))}
      </S.ContentList>
    </section>
  );
};

export default RecTextList;
