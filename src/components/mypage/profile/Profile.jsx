import { useState } from 'react';
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
  PageTitle,
  ContentWrapper,
  NameInputWrapper,
  NameInput,
  ProfileImageUpload,
  EditIconOverlay,
  ButtonWrapper,
} from './style';
import Button from '../../../ui/Button';
import PencilIcon from '../../../ui/icon/PencilIcon';

export const Profile = ({ maxProfiles = 4, mode = 'view' }) => {
  // 현재 모드 상태 (view/edit)
  const [currentMode, setCurrentMode] = useState(mode);

  // 선택된 프로필 상태
  const [selectedProfile, setSelectedProfile] = useState(null);

  // 새 프로필 추가 여부 상태
  const [isAddingNewProfile, setIsAddingNewProfile] = useState(false);

  // 프로필 목록 상태
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'Name', image: null },
    { id: 2, name: 'Name', image: null },
    { id: 3, name: 'Name', image: null },
  ]);

  // 프로필 선택 핸들러 (편집 모드일 때만 동작)
  const handleProfileSelect = (profile) => {
    if (currentMode === 'edit') {
      setSelectedProfile(profile);
      setIsAddingNewProfile(false);
    }
  };

  // 새 프로필 추가 핸들러
  const handleAddNewProfile = () => {
    if (profiles.length < maxProfiles) {
      // 빈 프로필 상태로 설정
      setSelectedProfile({ id: null, name: '', image: null });
      setIsAddingNewProfile(true);
    }
  };

  // 프로필 편집/추가 핸들러
  const handleProfileEdit = (updatedProfile) => {
    if (isAddingNewProfile) {
      // 새 프로필 추가 로직
      const newProfile = {
        ...updatedProfile,
        id: profiles.length + 1,
      };
      setProfiles([...profiles, newProfile]);
    } else {
      // 기존 프로필 수정 로직
      setProfiles(profiles.map((profile) => (profile.id === updatedProfile.id ? updatedProfile : profile)));
    }
    // 상태 초기화
    setSelectedProfile(null);
    setIsAddingNewProfile(false);
  };

  // 이미지 업로드 핸들러
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && selectedProfile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedProfile = {
          ...selectedProfile,
          image: reader.result,
        };
        handleProfileEdit(updatedProfile);
      };
      reader.readAsDataURL(file);
    }
  };

  // 기본 프로필 아이콘 컴포넌트
  const DefaultProfileIcon = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 40C51.0457 40 60 31.0457 60 20C60 8.95431 51.0457 0 40 0C28.9543 0 20 8.95431 20 20C20 31.0457 28.9543 40 40 40ZM40 50C26.1938 50 0 56.9063 0 70.6875V80H80V70.6875C80 56.9063 53.8062 50 40 50Z"
        fill="#989899"
      />
    </svg>
  );

  // 프로필 선택 화면
  if (!selectedProfile) {
    return (
      <Wrapper>
        <Title>프로필 선택</Title>
        <Subtitle>시청할 프로필을 선택해 주세요.</Subtitle>

        <ProfileGrid>
          {/* 기존 프로필 렌더링 */}
          {profiles.map((profile) => (
            <ProfileItem key={profile.id} onClick={() => handleProfileSelect(profile)}>
              <ProfileCircle isEdit={currentMode === 'edit'}>{currentMode === 'edit' && <PencilIcon />}</ProfileCircle>
              <ProfileName>{profile.name}</ProfileName>
            </ProfileItem>
          ))}

          {/* 새 프로필 추가 버튼 */}
          {profiles.length < maxProfiles && (
            <ProfileItem onClick={handleAddNewProfile}>
              <AddProfileCircle>
                <span style={{ fontSize: '24px', color: '#989899' }}>+</span>
              </AddProfileCircle>
              <ProfileName>프로필 추가</ProfileName>
            </ProfileItem>
          )}
        </ProfileGrid>

        {/* 프로필 편집 모드 토글 버튼 */}
        <ProfileButtonWrapper>
          <Button width="150px" onClick={() => setCurrentMode(currentMode === 'view' ? 'edit' : 'view')}>
            {currentMode === 'view' ? '프로필 편집' : '완료'}
          </Button>
        </ProfileButtonWrapper>
      </Wrapper>
    );
  }

  // 프로필 편집/추가 화면
  return (
    <Wrapper>
      <ContentWrapper>
        {/* 동적으로 변경되는 페이지 타이틀 */}
        <PageTitle>{isAddingNewProfile ? '프로필 추가' : '프로필 편집'}</PageTitle>

        {/* 프로필 이미지 업로드 */}
        <ProfileImageUpload>
          <input
            type="file"
            accept="image/*"
            id="profile-image-upload"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <ProfileCircle $editPage={true}>
            {selectedProfile.image ? (
              <img
                src={selectedProfile.image}
                alt="Profile"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <DefaultProfileIcon />
            )}
            <EditIconOverlay htmlFor="profile-image-upload">
              <PencilIcon />
            </EditIconOverlay>
          </ProfileCircle>
        </ProfileImageUpload>

        {/* 프로필 이름 입력 */}
        <NameInputWrapper>
          <NameInput
            type="text"
            value={selectedProfile.name}
            onChange={(e) => {
              const updatedProfile = {
                ...selectedProfile,
                name: e.target.value,
              };
              setSelectedProfile(updatedProfile);
            }}
            placeholder="프로필 이름"
            maxLength={10}
          />
        </NameInputWrapper>

        {/* 취소, 삭제(조건부), 확인 버튼 */}
        <ButtonWrapper>
          {/* 새 프로필 추가 화면이 아닐 때만 프로필 삭제 버튼 표시 */}
          {!isAddingNewProfile && (
            <Button
              variant="secondary"
              width="150px"
              onClick={() => {
                // 프로필 삭제 로직 추가
                setProfiles(profiles.filter((profile) => profile.id !== selectedProfile.id));
                setSelectedProfile(null);
              }}
            >
              프로필 삭제
            </Button>
          )}

          {/* 취소 버튼 */}
          <Button
            variant="secondary"
            width="150px"
            onClick={() => {
              setSelectedProfile(null);
              setIsAddingNewProfile(false);
            }}
          >
            취소
          </Button>

          {/* 확인 버튼 */}
          <Button
            width="150px"
            onClick={() => {
              handleProfileEdit(selectedProfile);
            }}
          >
            확인
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
