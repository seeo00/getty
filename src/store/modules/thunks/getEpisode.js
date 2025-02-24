// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3';
// // 반드시 TMDB v3 API 키를 사용하세요.
// const API_KEY_V3 = import.meta.env.VITE_API_KEY_V3;

// const optionsv3 = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//   },
// };

// export const getEpisode = createAsyncThunk(
//   'Episode/getEpisode',
//   async ({ tvId = '1399', seasonNumber = '1' }, thunkAPI) => {
//     try {
//       // v3 엔드포인트: api_key는 쿼리 파라미터로 전달
//       const url = `${BASE_URL}/tv/${tvId}/season/${seasonNumber}?language=ko-KR&api_key=${API_KEY_V3}`;
//       const response = await axios.get(url, optionsv3);
//       const episodes = response.data.episodes;
//       return episodes;
//     } catch (error) {
//       console.error('Error fetching episodes:', error);
//       return thunkAPI.rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );
