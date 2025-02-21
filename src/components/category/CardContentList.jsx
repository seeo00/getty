import { InnerContainer } from '../../common/layout/InnerContainer';
import CardBasic from '../../ui/card/CardBasic';
import LoadingSpinner from '../../ui/LoadingSpinner';
import * as S from './style';

const CardContentList = ({ data = [], loading, lastElementRef }) => {
  return (
    <InnerContainer>
      {loading && data.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <S.CardContentContainer>
          {data.map((item, index) => (
            <div key={item.id} ref={index === data.length - 1 ? lastElementRef : null}>
              <CardBasic item={item} />
            </div>
          ))}
          {loading && data.length > 0 && <LoadingSpinner />}
        </S.CardContentContainer>
      )}
    </InnerContainer>
  );
};

export default CardContentList;
