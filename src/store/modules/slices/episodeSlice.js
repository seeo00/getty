import { createSlice } from '@reduxjs/toolkit';
import { getEpisode } from '../thunks/getEpisode';

const initialState = {
  episodeData: [],
  currentCategory: 'base',
  currentPage: 1,
  hasMore: true,
  loading: false,
  error: null,
};

const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {
    // 콘텐츠 이동 시 카테고리 변경과 함께 초기화
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.currentPage = 1;
      state.episodeData = [];
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEpisode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEpisode.fulfilled, (state, action) => {
        state.loading = false;
        // 무조건 현재 요청한 페이지의 에피소드만 state에 저장
        state.episodeData = action.payload;
      })
      .addCase(getEpisode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const episodeActions = episodeSlice.actions;
export default episodeSlice.reducer;
