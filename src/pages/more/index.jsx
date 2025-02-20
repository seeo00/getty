import * as S from './style';
import { useLocation } from 'react-router-dom';
import { InnerContainer } from '../../common/layout/InnerContainer';
import { CardContentContainer } from '../../components/category/style';
import CardBasic from '../../ui/card/CardBasic';
import { useMoreData } from '../../hooks/useMoreData';

const More = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const section = params.get('section');
  const title = params.get('title');

  const sectionData = useMoreData(section);

  return (
    <S.MoreContainer>
      <InnerContainer>
        <S.MorePageHeader>
          <h2>{title}</h2>
        </S.MorePageHeader>
        <CardContentContainer>
          {sectionData.map((item) => (
            <div key={item.id}>
              <CardBasic item={item} />
            </div>
          ))}
        </CardContentContainer>
      </InnerContainer>
    </S.MoreContainer>
  );
};

export default More;
