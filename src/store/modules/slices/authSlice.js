import { createSlice } from '@reduxjs/toolkit';

const defaultProfileImage =
  'https://raw.githubusercontent.com/seeo00/project-image-storage/c64fd8a5f8a960d9498a00e135cde5606ecd505c/images/logo/circle.svg';

const initialState = {
  usersData: localStorage.getItem('usersData')
    ? JSON.parse(localStorage.getItem('usersData'))
    : [
        {
          id: 1,
          email: 'abc@gmail.com',
          password: 'a123456',
          profiles: [
            {
              profileId: 1,
              profileName: '서영',
              profileImage: defaultProfileImage,
            },
            {
              profileId: 2,
              profileName: '채은',
              profileImage: defaultProfileImage,
            },
            {
              profileId: 3,
              profileName: '지니',
              profileImage: defaultProfileImage,
            },
          ],
          selectedProfile: {
            profileId: 1,
            profileName: '서영',
            profileImage: defaultProfileImage,
          },
          subscriptionPlan: 'Premium',
          subscribed: true,
          playlist: [],
          likedContents: [],
        },
      ],
  authed: localStorage.getItem('authed') === 'true' ? true : false,
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
  // selectedProfile: localStorage.getItem('selectedProfile') ? JSON.parse(localStorage.getItem('selectedProfile')) : null,
  isExistingEmail: null,
  enteredEmail: '',
  errorMessage: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // 이메일 확인
    checkEmail: (state, action) => {
      const { email } = action.payload;
      state.enteredEmail = email;

      const Newuser = state.usersData.find((item) => item.email === email);
      if (Newuser) {
        state.isExistingEmail = true;
      } else {
        state.isExistingEmail = false;
      }
    },

    // 로그인
    login: (state, action) => {
      const { password, keepLogin } = action.payload;

      const Newuser = state.usersData.find((user) => user.email === state.enteredEmail);

      if (!Newuser || Newuser.password !== password) {
        state.errorMessage = '비밀번호가 올바르지 않습니다. 다시 입력해주세요.';
        return;
      }

      state.errorMessage = '';
      state.authed = true;
      state.user = Newuser;

      const profilesCount = Newuser.profiles.length || 0;
      const lastSelectedProfile = localStorage.getItem('selectedProfile')
        ? JSON.parse(localStorage.getItem('selectedProfile'))
        : null;

      const isValidProfile =
        lastSelectedProfile && Newuser.profiles.some((profile) => profile.profileId === lastSelectedProfile.profileId);

      state.user.selectedProfile = isValidProfile
        ? lastSelectedProfile
        : profilesCount === 1
        ? Newuser.profiles[0]
        : null;

      if (keepLogin) {
        localStorage.setItem('authed', 'true');
        localStorage.setItem('user', JSON.stringify(Newuser));
        if (state.user.selectedProfile) {
          localStorage.setItem('selectedProfile', JSON.stringify(state.user.selectedProfile));
        }
      }
    },

    // 회원가입
    signup: (state, action) => {
      const { email, password } = action.payload;
      // 기본 프로필 닉네임 생성: 이메일의 '@' 앞부분을 가져와 최대 10자로 제한
      const profileName = email.split('@')[0].slice(0, 10);

      const Newuser = {
        id: state.usersData.length + 1,
        email,
        password,
        profiles: [
          {
            profileId: 1,
            profileName,
            profileImage: defaultProfileImage,
          },
        ],
        selectedProfile: null,
        subscriptionPlan: '',
        subscribed: false,
      };

      if (Newuser.profiles.length > 0) {
        Newuser.selectedProfile = Newuser.profiles[0];
      }

      state.usersData = [...state.usersData, Newuser];
      localStorage.setItem('usersData', JSON.stringify(state.usersData));

      state.authed = true;
      state.user = Newuser;
      state.user.selectedProfile = Newuser.selectedProfile;

      localStorage.setItem('authed', 'true');
      localStorage.setItem('user', JSON.stringify(Newuser));
      localStorage.setItem('selectedProfile', JSON.stringify(Newuser.selectedProfile));
    },

    // 비밀번호 재설정
    resetPasswordCheckEmail: (state, action) => {
      const { email } = action.payload;
      const newUser = state.usersData.find((item) => item.email === email);
      if (newUser) {
        state.isExistingEmail = true;
        state.errorMessage = '';
      } else {
        state.isExistingEmail = false;
        state.errorMessage = '이메일 전송에 실패했습니다. 다시 시도해주세요.';
      }
    },

    // 로그아웃
    logout: (state) => {
      state.authed = false;
      state.user = null;

      localStorage.removeItem('authed');
      localStorage.removeItem('user');
      localStorage.removeItem('selectedProfile');
    },

    // 초기화
    resetAuthState: (state) => {
      state.isExistingEmail = null;
      state.enteredEmail = '';
      state.errorMessage = '';
    },

    // 이용권 구독
    subscribePlan: (state, action) => {
      if (!state.user) return;

      state.user.subscriptionPlan = action.payload;
      state.user.subscribed = true;

      const updatedUsers = state.usersData.map((user) =>
        user.id === state.user.id ? { ...user, subscriptionPlan: action.payload, subscribed: true } : user
      );
      state.usersData = updatedUsers;

      localStorage.setItem('usersData', JSON.stringify(updatedUsers));
      localStorage.setItem('user', JSON.stringify(state.user));
    },

    // 프로필 선택
    setSelectedProfile: (state, action) => {
      if (!state.user) return;

      state.user.selectedProfile = action.payload;

      state.usersData = state.usersData.map((user) =>
        user.id === state.user.id ? { ...user, selectedProfile: action.payload } : user
      );

      localStorage.setItem('selectedProfile', JSON.stringify(action.payload));
      localStorage.setItem('usersData', JSON.stringify(state.usersData));
      localStorage.setItem('user', JSON.stringify(state.user));
    },

    // 프로필 추가
    addProfile: (state, action) => {
      const newProfile = action.payload;

      state.user.profiles = [...state.user.profiles, newProfile];
      state.usersData = state.usersData.map((user) =>
        user.id === state.user.id ? { ...user, profiles: [...user.profiles, newProfile] } : user
      );

      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('usersData', JSON.stringify(state.usersData));
    },

    // 프로필 편집
    editProfile: (state, action) => {
      const updatedProfile = action.payload;

      state.user.profiles = state.user.profiles.map((profile) =>
        profile.profileId === updatedProfile.profileId
          ? {
              ...profile,
              ...updatedProfile,
            }
          : profile
      );

      if (state.user.selectedProfile && state.user.selectedProfile.profileId === updatedProfile.profileId) {
        state.user.selectedProfile = {
          ...state.user.selectedProfile,
          ...updatedProfile,
        };
      }

      state.usersData = state.usersData.map((user) => {
        if (user.id === state.user.id) {
          return {
            ...user,
            profiles: state.user.profiles,
            selectedProfile: state.user.selectedProfile,
          };
        }
        return user;
      });

      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('usersData', JSON.stringify(state.usersData));
      localStorage.setItem('selectedProfile', JSON.stringify(state.user.selectedProfile));
    },
    // 프로필 삭제
    deleteProfile: (state, action) => {
      const profileIdToDelete = action.payload;

      state.user.profiles = state.user.profiles.filter((profile) => profile.profileId !== profileIdToDelete);

      if (state.user.selectedProfile && state.user.selectedProfile.profileId === profileIdToDelete) {
        state.user.selectedProfile = null;
      }

      state.usersData = state.usersData.map((user) => {
        if (user.id === state.user.id) {
          const updatedProfiles = user.profiles.filter((profile) => profile.profileId !== profileIdToDelete);

          return {
            ...user,
            profiles: updatedProfiles,
            selectedProfile:
              user.selectedProfile && user.selectedProfile.profileId === profileIdToDelete
                ? null
                : user.selectedProfile,
          };
        }
        return user;
      });

      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('usersData', JSON.stringify(state.usersData));

      if (state.user.selectedProfile === null) {
        localStorage.removeItem('selectedProfile');
      } else {
        localStorage.setItem('selectedProfile', JSON.stringify(state.user.selectedProfile));
      }
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
