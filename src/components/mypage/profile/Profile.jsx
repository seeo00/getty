import {
  Wrapper,
  Title,
  Subtitle,
  ProfileGrid,
  ProfileItem,
  ProfileCircle,
  AddProfileCircle,
  ProfileName,
} from './style';
import Button from '../../../ui/Button';
import CircleButton from '../../../ui/CircleButton';
export const Profile = ({ maxProfiles = 3 }) => {
  const profiles = [
    { id: 1, name: 'Name' },
    { id: 2, name: 'Name' },
  ];

  return (
    <Wrapper>
      <Title>프로필 선택</Title>
      <Subtitle>시청할 프로필을 선택해 주세요.</Subtitle>

      <ProfileGrid>
        {profiles.map((profile) => (
          <ProfileItem key={profile.id}>
            <ProfileCircle />
            <ProfileName>{profile.name}</ProfileName>
          </ProfileItem>
        ))}

        {profiles.length < maxProfiles && (
          <ProfileItem>
            <AddProfileCircle>
              <span style={{ fontSize: '32px', color: '#989899' }}>+</span>
            </AddProfileCircle>
            <ProfileName>Name</ProfileName>
          </ProfileItem>
        )}
      </ProfileGrid>
      <Button>Button</Button>
      <CircleButton>ss</CircleButton>
    </Wrapper>
  );
};
