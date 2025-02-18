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
  ProfileImageUpload,
  ButtonWrapper,
} from './style';
import Button from '../../../ui/Button';
import InputField from '../../../ui/InputField';
import PencilIcon from '../../../ui/icon/PencilIcon';
import DeleteConfirmationModal from './DeleteConfirmationModal';

export const Profile = ({ maxProfiles = 4, mode = 'view' }) => {
  const [currentMode, setCurrentMode] = useState(mode);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isAddingNewProfile, setIsAddingNewProfile] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'Name', image: null },
    { id: 2, name: 'Name', image: null },
    { id: 3, name: 'Name', image: null },
  ]);

  // 프로필 이름 검증 함수
  const validateProfileName = (value) => {
    // 10자 초과 체크
    if (value.length > 10) {
      return '프로필 이름은 10자 이하로 입력해주세요.';
    }

    // 한글, 영문, 숫자만 허용하는 정규표현식
    const validNameRegex = /^[가-힣a-zA-Z0-9]*$/;

    // 유효하지 않은 문자 체크
    if (value && !validNameRegex.test(value)) {
      return '한글, 영문, 숫자만 입력 가능합니다.';
    }

    // 최소 1자 체크
    if (value.length < 1) {
      return '프로필 이름은 1자 이상 입력해야 합니다.';
    }

    // 모든 조건 통과 시
    return '';
  };

  // 이름 변경 핸들러
  const handleNameChange = (e) => {
    const inputValue = e.target.value;

    // 검증 함수 호출
    const errorMessage = validateProfileName(inputValue);

    setSelectedProfile((prev) => ({
      ...prev,
      name: inputValue,
    }));

    const inputElement = e.target;
    if (inputElement) {
      // 강제로 에러 메시지 트리거
      const blurEvent = new FocusEvent('blur', { bubbles: true });
      inputElement.dispatchEvent(blurEvent);
    }
  };

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

  // PencilIcon 클릭 시 파일 업로드 트리거 함수
  const triggerFileUpload = () => {
    document.getElementById('profile-image-upload').click();
  };

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
                <span style={{ fontSize: '14px', color: '${color.gray[70]}' }}>+</span>
              </AddProfileCircle>
              <ProfileName>프로필 추가</ProfileName>
            </ProfileItem>
          )}
        </ProfileGrid>

        {/* 프로필 편집 모드 토글 버튼 */}
        <ProfileButtonWrapper>
          <Button onClick={() => setCurrentMode(currentMode === 'view' ? 'edit' : 'view')}>
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
              <div onClick={triggerFileUpload} style={{ cursor: 'pointer' }}>
                <PencilIcon style={{ opacity: 1 }} />
              </div>
            )}
          </ProfileCircle>
        </ProfileImageUpload>

        {/* 프로필 이름 입력 */}
        <NameInputWrapper>
          <InputField
            type="text"
            value={selectedProfile.name}
            onChange={handleNameChange}
            getErrorMessage={validateProfileName}
            placeholder="프로필 이름"
            maxLength={10}
          />
        </NameInputWrapper>

        <ButtonWrapper>
          {/* 새 프로필 추가 화면이 아닐 때만 프로필 삭제 버튼 표시 */}
          {!isAddingNewProfile && (
            <Button variant="secondary" onClick={() => setIsDeleteModalOpen(true)}>
              프로필 삭제
            </Button>
          )}

          {/* 삭제 확인 모달 */}
          <DeleteConfirmationModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onConfirm={() => {
              // 프로필 삭제 로직
              setProfiles(profiles.filter((profile) => profile.id !== selectedProfile.id));
              setSelectedProfile(null);
              setIsDeleteModalOpen(false);
            }}
          />

          {/* 취소 버튼 */}
          <Button
            variant="secondary"
            onClick={() => {
              setSelectedProfile(null);
              setIsAddingNewProfile(false);
            }}
          >
            취소
          </Button>

          {/* 확인 버튼 */}
          <Button
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
