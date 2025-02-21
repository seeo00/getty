import styled from 'styled-components';
import CardBasic from '../../ui/card/CardBasic';
import { CardBasicSkeleton } from '../../ui/LoadingSkeleton';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { respondTo } from '../../styled/GlobalStyle';

const CardContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  ${respondTo('desktop')} {
    gap: 12px;
  }
  > div {
    flex-basis: calc(33.3333% - (16px / 3));

    ${respondTo('tabletMore')} {
      flex-basis: calc(20% - (32px / 5));
    }

    ${respondTo('desktop')} {
      flex-basis: calc(20% - (48px / 5));
    }
  }
`;

const CardFlexList = ({ items = [], loading, lastElementRef }) => {
  return (
    <>
      <CardContentContainer>
        {loading && items.length === 0
          ? Array.from({ length: 10 }).map((_, index) => (
              <div key={index}>
                <CardBasicSkeleton />
              </div>
            ))
          : items.map((item, index) => (
              <div key={item.id} ref={index === items.length - 1 ? lastElementRef : null}>
                <CardBasic item={item} />
              </div>
            ))}

        {loading && items.length > 0 && <LoadingSpinner />}
      </CardContentContainer>
    </>
  );
};

export default CardFlexList;
