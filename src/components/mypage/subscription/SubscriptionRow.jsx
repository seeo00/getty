// SubscriptionRow/SubscriptionRow.js
import { RowContainer, RowContent, Text, ExtraInfo } from '../style';

const SubscriptionRow = ({ label = '월 요금', price, extra }) => {
  return (
    <RowContainer>
      <RowContent>
        <Text>{label}</Text>
        {price && <Text>{price}원</Text>}
      </RowContent>
      {extra && <ExtraInfo>{extra}</ExtraInfo>}
    </RowContainer>
  );
};

export default SubscriptionRow;
