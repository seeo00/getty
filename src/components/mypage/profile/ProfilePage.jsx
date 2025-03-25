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
  ButtonWrapper,
} from './style';
import InputField from '../../../ui/InputField';
import PencilIcon from '../../../ui/icon/PencilIcon';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../../store/modules/slices/authSlice';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import Button from '../../../ui/button/Button';

const ProfilePage = ({ maxProfiles = 4, mode = 'view' }) => {
  const { user } = useSelector((state) => state.authR);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentMode, setCurrentMode] = useState(mode);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isAddingNewProfile, setIsAddingNewProfile] = useState(false);
  const [newProfileName, setNewProfileName] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const profiles = user?.profiles || [];

  const defaultProfileImage =
    'https://raw.githubusercontent.com/seeo00/project-image-storage/c64fd8a5f8a960d9498a00e135cde5606ecd505c/images/logo/circle.svg';

  const handleProfileSelect = (profile) => {
    if (currentMode === 'edit') {
      setSelectedProfile(profile);
      setIsAddingNewProfile(false);
      setNewProfileName(profile.profileName);
    } else {
      dispatch(authActions.setSelectedProfile(profile));
      localStorage.setItem('selectedProfile', JSON.stringify(profile));
      navigate('/');
    }
  };

  const handleAddProfile = () => {
    if (newProfileName.trim() === '') return;

    const maxProfileId = profiles.length > 0 ? Math.max(...profiles.map((profile) => profile.profileId)) : 0;

    const newProfile = {
      profileId: maxProfileId + 1,
      profileName: newProfileName,
      profileImage: selectedProfile?.profileImage || defaultProfileImage,
    };

    dispatch(authActions.addProfile(newProfile));
    setIsAddingNewProfile(false);
    setNewProfileName('');
    setSelectedProfile(null);
  };

  const handleEditProfile = () => {
    if (newProfileName.trim() === '' || !selectedProfile) return;

    const currentProfile = user.profiles.find((p) => p.profileId === selectedProfile.profileId);
    const updatedProfile = {
      ...currentProfile,
      profileName: newProfileName,
    };

    dispatch(authActions.editProfile(updatedProfile));
    setSelectedProfile(null);
    setNewProfileName('');
  };

  const handleDeleteProfile = () => {
    if (!selectedProfile) return;

    dispatch(authActions.deleteProfile(selectedProfile.profileId));
    setSelectedProfile(null);
    setNewProfileName('');
    setIsDeleteModalOpen(false);
    setCurrentMode('view');
  };

  // 로컬스토리지 저장을 위해 이미지 사이즈 제한
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 160;
      const MAX_HEIGHT = 160;

      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const resizedImage = canvas.toDataURL('image/jpeg', 0.7);

      if (isAddingNewProfile) {
        // 새 프로필 추가 시
        setSelectedProfile({
          profileId: profiles.length + 1,
          profileName: newProfileName,
          profileImage: resizedImage,
        });
      } else {
        // 기존 프로필 수정 시
        const updatedProfile = {
          ...selectedProfile,
          profileImage: resizedImage,
        };
        setSelectedProfile(updatedProfile);
        dispatch(authActions.editProfile(updatedProfile));
      }
    };
  };

  const triggerFileUpload = () => {
    document.getElementById('profile-image-upload').click();
  };

  // 프로필 선택
  if (!selectedProfile && !isAddingNewProfile) {
    return (
      <Wrapper>
        <Title>프로필 선택</Title>
        <Subtitle>시청할 프로필을 선택해 주세요.</Subtitle>

        <ProfileGrid className={profiles.length <= 2 ? 'single-profile' : ''}>
          {profiles.map((profile) => (
            <ProfileItem key={profile.profileId} onClick={() => handleProfileSelect(profile)}>
              <ProfileCircle isEdit={currentMode === 'edit'}>
                <img
                  src={profile.profileImage}
                  alt={profile.profileName}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
                {currentMode === 'edit' && <PencilIcon />}
              </ProfileCircle>
              <ProfileName>{profile.profileName}</ProfileName>
            </ProfileItem>
          ))}

          {profiles.length < maxProfiles && user.subscribed && (
            <ProfileItem onClick={() => setIsAddingNewProfile(true)} $isAddProfile={true}>
              <AddProfileCircle>
                <span style={{ fontSize: '14px' }}>+</span>
              </AddProfileCircle>
              <ProfileName>프로필 추가</ProfileName>
            </ProfileItem>
          )}
        </ProfileGrid>

        <ProfileButtonWrapper>
          <Button onClick={() => setCurrentMode(currentMode === 'view' ? 'edit' : 'view')}>
            {currentMode === 'view' ? '프로필 편집' : '완료'}
          </Button>
        </ProfileButtonWrapper>
      </Wrapper>
    );
  }

  // 프로필 편집 추가
  return (
    <Wrapper>
      <ContentWrapper>
        <PageTitle>{isAddingNewProfile ? '프로필 추가' : '프로필 편집'}</PageTitle>

        <input
          type="file"
          accept="image/*"
          id="profile-image-upload"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />

        <ProfileCircle $editPage={true} onClick={triggerFileUpload}>
          <img
            src={selectedProfile?.profileImage || defaultProfileImage}
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <PencilIcon style={{ position: 'absolute', bottom: '5px', right: '5px' }} />
        </ProfileCircle>

        <NameInputWrapper>
          <InputField
            type="text"
            value={newProfileName}
            onChange={(e) => setNewProfileName(e.target.value)}
            maxLength={10}
            label="프로필 이름"
          />
        </NameInputWrapper>

        <ButtonWrapper>
          {!isAddingNewProfile && profiles.length > 1 && (
            <Button variant="secondary" onClick={() => setIsDeleteModalOpen(true)}>
              프로필 삭제
            </Button>
          )}
          <Button
            variant="secondary"
            onClick={() => {
              setSelectedProfile(null);
              setIsAddingNewProfile(false);
              setCurrentMode('view');
              setNewProfileName('');
            }}
          >
            취소
          </Button>
          <Button onClick={isAddingNewProfile ? handleAddProfile : handleEditProfile}>확인</Button>
        </ButtonWrapper>
      </ContentWrapper>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteProfile}
      />
    </Wrapper>
  );
};

export default ProfilePage;
