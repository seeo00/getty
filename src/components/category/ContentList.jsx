import { InnerContainer } from '../../common/layout/InnerContainer';
import CardBasic from '../../ui/card/CardBasic';
import { CardBasicSkeleton } from '../../ui/LoadingSkeleton';
import LoadingSpinner from '../../ui/LoadingSpinner';
import * as S from './style';

const ContentList = ({ data = [], loading, lastElementRef }) => {
  return (
    <InnerContainer>
      {loading && data.length === 0 ? (
        <LoadingSpinner center />
      ) : (
        <S.ContentArea>
          {data.map((item, index) => (
            <div key={item.id} ref={index === data.length - 1 ? lastElementRef : null}>
              <CardBasic item={item} />
            </div>
          ))}
          {loading && data.length > 0 && (
            <>
              <CardBasicSkeleton />
              <CardBasicSkeleton />
              <CardBasicSkeleton />
              <CardBasicSkeleton />
              <CardBasicSkeleton />
            </>
          )}
        </S.ContentArea>
      )}
    </InnerContainer>
  );
};

export default ContentList;
