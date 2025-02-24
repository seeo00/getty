// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { hasKorean } from '../../../utils/regexUtils';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = import.meta.env.VITE_API_KEY;

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${API_KEY}`,
//   },
// };

// // 공개 예정 영화
// export const getUpcomingMovie = createAsyncThunk('movie/getUpcomingMovie', async () => {
//   try {
//     const url = `${BASE_URL}/movie/upcoming?language=ko-KR&region=KR`;
//     const response = await axios.get(url, options);

//     return response.data.results.filter(
//       (item) =>
//         hasKorean(item.name) || hasKorean(item.title) || hasKorean(item.overview) || item.original_language === 'ko'
//     );
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// });
