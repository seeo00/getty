// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { hasKorean } from '../../../utils/regexUtils';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = import.meta.env.VITE_API_KEY;

// const itemsPerPage = 20;

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${API_KEY}`,
//   },
// };

// // // trending api 요청
// // const getTrending = async (timeWindow) => {
// //   let page = 1;
// //   // const apiPages = 5;
// //   let trendingData = [];

// //   try {
// //     while (trendingData.length < itemsPerPage) {
// //       const url = `${BASE_URL}/trending/all/${timeWindow}?language=ko-KR&page=${page}`;
// //       const response = await axios.get(url, options);

// //       const newFilteredResults = response.data.results.filter(
// //         (item) =>
// //           (item.media_type === 'movie' || item.media_type === 'tv') &&
// //           (hasKorean(item.name) ||
// //             hasKorean(item.title) ||
// //             hasKorean(item.overview) ||
// //             item.original_language === 'ko') &&
// //           item.vote_count >= 20 &&
// //           item.vote_average >= 6
// //       );

// //       trendingData.push(...newFilteredResults);
// //       page++;

// //       if (response.data.results.length === 0) break;
// //     }

// //     return trendingData.slice(0, itemsPerPage);
// //   } catch (error) {
// //     console.error(error);
// //     return [];
// //   }
// // };

// // // 일간 트렌딩 (오늘의 top20)
// // export const getTrendingDay = createAsyncThunk('trendingDay/getTrendingDay', async () => {
// //   return await getTrending('day');
// // });

// // // 주간 트렌딩 (최신 트렌드 콘텐츠)
// // export const getTrendingWeek = createAsyncThunk('trendingWeek/getTrendingWeek', async () => {
// //   return await getTrending('week');
// // });
