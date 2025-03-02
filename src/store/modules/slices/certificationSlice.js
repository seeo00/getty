import { createSlice } from '@reduxjs/toolkit';
import { getCertification } from '../thunks/getDetailsThunks';

const initialState = {
  certificationData: [],
  loading: false,
  error: null,
};

const certificationSlice = createSlice({
  name: 'certification',
  initialState,
  reducers: {
    // 콘텐츠 이동 시 카테고리 변경과 함께 초기화
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.currentPage = 1;
      state.certificationData = [];
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCertification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCertification.fulfilled, (state, action) => {
        state.loading = false;
        // 현재 요청한 인증 데이터를 state에 저장
        state.certificationData = action.payload;
      })
      .addCase(getCertification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const certificationActions = certificationSlice.actions;
export default certificationSlice.reducer;
