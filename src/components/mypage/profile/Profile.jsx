import {
  Wrapper,
  Title,
  Subtitle,
  ProfileGrid,
  ProfileItem,
  ProfileCircle,
  AddProfileCircle,
  ProfileName,
  ProfileButtonWrapper,
} from './style';
import Button from '../../../ui/Button';
import PencilIcon from '../../../ui/icon/PencilIcon';

export const Profile = ({ maxProfiles = 4 }) => {
  const profiles = [
    { id: 1, name: 'Name' },
    { id: 2, name: 'Name' },
    { id: 3, name: 'Name' },
  ];

  return (
    <Wrapper>
      <Title>프로필 선택</Title>
      <Subtitle>시청할 프로필을 선택해 주세요.</Subtitle>

      <ProfileGrid>
        {profiles.map((profile) => (
          <ProfileItem key={profile.id}>
            <ProfileCircle >
           <PencilIcon/>
            </ProfileCircle >
            <ProfileName>{profile.name}</ProfileName>
          </ProfileItem>
        ))}
        
        {profiles.length < maxProfiles && (
          <ProfileItem>
            <AddProfileCircle>
              <span style={{ fontSize: '24px', color: '#989899' }}>+</span>
            </AddProfileCircle>
            <ProfileName>프로필 추가</ProfileName>
          </ProfileItem>
        )}
      </ProfileGrid>
      <ProfileButtonWrapper><Button width="150px" >프로필 편집</Button></ProfileButtonWrapper>
    </Wrapper>
  );
};