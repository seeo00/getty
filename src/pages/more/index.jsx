import * as S from './style';
import { useLocation } from 'react-router-dom';
import { InnerContainer } from '../../common/layout/InnerContainer';
import { useMoreData } from '../../hooks/useMoreData';
import { useSelector } from 'react-redux';
import CardFlexList from '../../ui/card/CardFlexList';

const More = () => {
  const location = useLocation();
  const { loading } = useSelector((state) => state.combinedR);
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
        <CardFlexList items={sectionData} loading={loading} />
      </InnerContainer>
    </S.MoreContainer>
  );
};

export default More;
