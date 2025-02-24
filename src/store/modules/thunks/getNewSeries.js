// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { hasKorean } from '../../../utils/regexUtils';
// import { getFormattedDate } from '../../../utils/dateUtils';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = import.meta.env.VITE_API_KEY;

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${API_KEY}`,
//   },
// };

// // 새로 올라온 콘텐츠 (오늘부터 14일 전까지 공개된 콘텐츠)
// export const getNewSeries = createAsyncThunk('series/getNewSeries', async () => {
//   const pastDate = getFormattedDate(14);
//   const today = getFormattedDate(0);
//   try {
//     const url = `${BASE_URL}/discover/tv?language=ko-KR&first_air_date.gte=${pastDate}&first_air_date.lte=${today}`;
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
