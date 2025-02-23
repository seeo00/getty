import { useSelector } from 'react-redux';
import { color } from '../../styled/common';
import Button, { SmallButton } from '../../ui/button/Button';
import { PencilIcon } from '../../ui/icon';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const ProfileInfo = () => {
  const { user } = useSelector((state) => state.authR);
  const navigate = useNavigate();

  return (
    <>
      <S.ProfileContainer>
        <S.ProfileImage src={user.selectedProfile.profileImage} alt="프로필이미지" />
        <div>
          <S.ProfileInfoBox>
            <h2>{user.selectedProfile.profileName}</h2>
            <button onClick={() => navigate('/mypage/profile')}>
              <PencilIcon />
            </button>
          </S.ProfileInfoBox>
          <S.ProfileButtonBoxDesktop>
            <SmallButton
              $variant="outline"
              width="auto"
              outlineColor={color.gray[70]}
              onClick={() => navigate('/mypage/profile')}
            >
              프로필 전환
            </SmallButton>
            <SmallButton
              $variant="outline"
              width="auto"
              outlineColor={color.gray[70]}
              onClick={() => navigate('/subscription')}
            >
              {user.subscribed ? `${user.subscriptionPlan} 이용권` : '이용권 구독'}
            </SmallButton>
          </S.ProfileButtonBoxDesktop>
        </div>
      </S.ProfileContainer>
      <S.ProfileButtonBoxMobile>
        <SmallButton
          $variant="outline"
          width="100%"
          outlineColor={color.gray[70]}
          onClick={() => navigate('/subscription')}
        >
          {user.subscribed ? `${user.subscriptionPlan} 이용권` : '이용권 구독'}
        </SmallButton>
      </S.ProfileButtonBoxMobile>
    </>
  );
};

export default ProfileInfo;
