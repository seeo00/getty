import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usersData: localStorage.getItem('usersData')
    ? JSON.parse(localStorage.getItem('usersData'))
    : [
        {
          id: 1, // 테스트를 위해 기존 정보 하나 저장
          email: 'abc@gmail.com',
          password: 'a1234',
        },
      ],
  authed: localStorage.getItem('authed') === 'true' ? true : false,
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
  isExistingEmail: null,
  enteredEmail: '',
  errorMessage: '',
};

let no = initialState.usersData.length + 1;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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
    login: (state, action) => {
      const { password, keepLogin } = action.payload;
      const Newuser = state.usersData.find((item) => item.password === password);
      if (Newuser) {
        state.errorMessage = '';
        state.authed = true;
        state.user = Newuser;
        if (keepLogin) {
          localStorage.setItem('authed', 'true');
          localStorage.setItem('user', JSON.stringify(Newuser));
        }
      } else {
        state.errorMessage = '비밀번호가 일치하지 않습니다. 다시 입력해주세요.';
      }
    },
    signup: (state, action) => {
      const { email, password } = action.payload;
      const Newuser = { id: no++, email, password };

      state.usersData = [...state.usersData, Newuser];

      localStorage.setItem('usersData', JSON.stringify(state.usersData));

      state.authed = true;
      state.user = Newuser;
      localStorage.setItem('authed', 'true');
      localStorage.setItem('user', JSON.stringify(Newuser));
    },
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
    // initializeEmailCheck: (state) => {
    //   state.isExistingEmail = null;
    //   state.errorMessage = '';
    // },
    resetAuthState: (state) => {
      state.isExistingEmail = null;
      state.enteredEmail = '';
      state.errorMessage = '';
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
