import * as S from './style';
import { color } from '../../styled/common';
import { AlertIcon } from '../../ui/icon';

const TabContent = () => {
  return (
    <S.TabContentAlert>
      <AlertIcon width="44px" height="44px" color={color.white} />
      <p>준비 중입니다.</p>
    </S.TabContentAlert>
  );
};

export default TabContent;
