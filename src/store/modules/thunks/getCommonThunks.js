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

// const itemsPerPage = 20;

// // 새로 올라온 영화 (오늘부터 14일 전까지 공개된 영화)
// export const getNewMovie = createAsyncThunk('movie/getNewMovie', async () => {
//   try {
//     const pastDate = getFormattedDate(14);
//     const today = getFormattedDate(0);

//     const url = `${BASE_URL}/discover/movie?language=ko-KR&primary_release_date.gte=${pastDate}&primary_release_date.lte=${today}&region=KR`;
//     const response = await axios.get(url, options);

//     return response.data.results
//       .filter(
//         (item) =>
//           hasKorean(item.name) || hasKorean(item.title) || hasKorean(item.overview) || item.original_language === 'ko'
//       )
//       .map((item) => ({
//         ...item,
//         media_type: 'movie',
//       }));
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// });

// // 새로 올라온 콘텐츠 (오늘부터 14일 전까지 공개된 콘텐츠)
// export const getNewSeries = createAsyncThunk('series/getNewSeries', async () => {
//   const pastDate = getFormattedDate(14);
//   const today = getFormattedDate(0);
//   try {
//     const url = `${BASE_URL}/discover/tv?language=ko-KR&first_air_date.gte=${pastDate}&first_air_date.lte=${today}`;
//     const response = await axios.get(url, options);

//     return response.data.results
//       .filter(
//         (item) =>
//           hasKorean(item.name) || hasKorean(item.title) || hasKorean(item.overview) || item.original_language === 'ko'
//       )
//       .map((item) => ({
//         ...item,
//         media_type: 'tv',
//       }));
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// });

// // 공개 예정 영화
// export const getUpcomingMovie = createAsyncThunk('movie/getUpcomingMovie', async () => {
//   try {
//     const url = `${BASE_URL}/movie/upcoming?language=ko-KR&region=KR`;
//     const response = await axios.get(url, options);

//     return response.data.results
//       .filter(
//         (item) =>
//           hasKorean(item.name) || hasKorean(item.title) || hasKorean(item.overview) || item.original_language === 'ko'
//       )
//       .map((item) => ({
//         ...item,
//         media_type: 'movie',
//       }));
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// });

// // 기대되는 신규 콘텐츠
// export const getUpcomingSeries = createAsyncThunk('series/getUpcomingSeries', async () => {
//   const tomorrow = getFormattedDate(-1);
//   try {
//     const url = `${BASE_URL}/discover/tv?language=ko-KR&first_air_date.gte=${tomorrow}`;
//     const response = await axios.get(url, options);

//     return response.data.results
//       .filter(
//         (item) =>
//           hasKorean(item.name) || hasKorean(item.title) || hasKorean(item.overview) || item.original_language === 'ko'
//       )
//       .map((item) => ({
//         ...item,
//         media_type: 'tv',
//       }));
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// });

// // trending api 요청
// const getTrending = async (timeWindow) => {
//   let page = 1;
//   // const apiPages = 5;
//   let trendingData = [];

//   try {
//     while (trendingData.length < itemsPerPage) {
//       const url = `${BASE_URL}/trending/all/${timeWindow}?language=ko-KR&page=${page}`;
//       const response = await axios.get(url, options);

//       const newFilteredResults = response.data.results.filter(
//         (item) =>
//           (item.media_type === 'movie' || item.media_type === 'tv') &&
//           (hasKorean(item.name) ||
//             hasKorean(item.title) ||
//             hasKorean(item.overview) ||
//             item.original_language === 'ko') &&
//           item.vote_count >= 20 &&
//           item.vote_average >= 6
//       );

//       trendingData.push(...newFilteredResults);
//       page++;

//       if (response.data.results.length === 0) break;
//     }

//     return trendingData.slice(0, itemsPerPage);
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// // 일간 트렌딩 (오늘의 top20)
// export const getTrendingDay = createAsyncThunk('trendingDay/getTrendingDay', async () => {
//   return await getTrending('day');
// });

// // 주간 트렌딩 (최신 트렌드 콘텐츠)
// export const getTrendingWeek = createAsyncThunk('trendingWeek/getTrendingWeek', async () => {
//   return await getTrending('week');
// });

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { hasKorean } from '../../../utils/regexUtils';
import { getFormattedDate } from '../../../utils/dateUtils';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_API_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const itemsPerPage = 20;

// 공통된 axios 요청 함수
const fetchData = async (url) => {
  try {
    const response = await axios.get(url, options);
    return response.data.results
      .filter(
        (item) =>
          hasKorean(item.name) || hasKorean(item.title) || hasKorean(item.overview) || item.original_language === 'ko'
      )
      .map((item) => ({
        ...item,
        media_type: item.media_type === 'movie' ? 'movie' : 'tv',
      }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 트렌딩 공통 함수
const getTrending = async (timeWindow) => {
  let page = 1;
  let trendingData = [];

  try {
    while (trendingData.length < itemsPerPage) {
      const url = `${BASE_URL}/trending/all/${timeWindow}?language=ko-KR&page=${page}`;
      const apiResults = await fetchData(url);
      trendingData.push(...apiResults);
      page++;

      if (apiResults.length === 0) break;
    }

    return trendingData.slice(0, itemsPerPage);
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 새로 올라온 영화 (오늘부터 14일 전까지 공개된 영화)
export const getNewMovie = createAsyncThunk('movie/getNewMovie', async () => {
  const pastDate = getFormattedDate(14);
  const today = getFormattedDate(0);

  const url = `${BASE_URL}/discover/movie?language=ko-KR&primary_release_date.gte=${pastDate}&primary_release_date.lte=${today}&region=KR`;
  return await fetchData(url);
});

// 새로 올라온 콘텐츠 (오늘부터 14일 전까지 공개된 콘텐츠)
export const getNewSeries = createAsyncThunk('series/getNewSeries', async () => {
  const pastDate = getFormattedDate(14);
  const today = getFormattedDate(0);

  const url = `${BASE_URL}/discover/tv?language=ko-KR&first_air_date.gte=${pastDate}&first_air_date.lte=${today}`;
  return await fetchData(url);
});

// 공개 예정 영화
export const getUpcomingMovie = createAsyncThunk('movie/getUpcomingMovie', async () => {
  const url = `${BASE_URL}/movie/upcoming?language=ko-KR&region=KR`;
  return await fetchData(url);
});

// 기대되는 신규 콘텐츠
export const getUpcomingSeries = createAsyncThunk('series/getUpcomingSeries', async () => {
  const tomorrow = getFormattedDate(-1);
  const url = `${BASE_URL}/discover/tv?language=ko-KR&first_air_date.gte=${tomorrow}`;
  return await fetchData(url);
});

// 일간 트렌딩 (오늘의 top20)
export const getTrendingDay = createAsyncThunk('trendingDay/getTrendingDay', async () => {
  return await getTrending('day');
});

// 주간 트렌딩 (최신 트렌드 콘텐츠)
export const getTrendingWeek = createAsyncThunk('trendingWeek/getTrendingWeek', async () => {
  return await getTrending('week');
});
