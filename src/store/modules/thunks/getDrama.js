import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { hasKorean } from '../../../utils/regexUtils';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_URL_TV = `${BASE_URL}/discover/tv?language=ko-KR&vote_average.gte=6&vote_count.gte=20`;
// 기본 필터 : 한국어, 평점 6이상, 투표수 20개 이상
// default 인기순 정렬

const itemsPerPage = 20;
const apiPages = 5;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getDrama = createAsyncThunk('drama/getDrama', async ({ category, currentPage = 1, prevResults = [] }) => {
  const urls = {
    base: `${BASE_URL_TV}&with_genres=18&without_genres=16`,
    romance: `${BASE_URL_TV}&with_genres=18&without_genres=16&with_keywords=9840`,
    mystery: `${BASE_URL_TV}&with_genres=18,9648&without_genres=16`,
    fantasy: `${BASE_URL_TV}&with_genres=18,10765&without_genres=16`,
    crime: `${BASE_URL_TV}&with_genres=18,80&without_genres=16`,
    history: `${BASE_URL_TV}&with_genres=18&without_genres=16&with_keywords=15126|15060|248451`,
    comedy: `${BASE_URL_TV}&with_genres=18,35&without_genres=16`,
    youth: `${BASE_URL_TV}&with_genres=18&without_genres=16&with_keywords=193400|293194|10873|6270`,
    medical: `${BASE_URL_TV}&with_genres=18&without_genres=16&with_keywords=208788|11612|13005`,
    lawyer: `${BASE_URL_TV}&with_genres=18&without_genres=16&with_keywords=10909|6078`,
    office: `${BASE_URL_TV}&with_genres=18&without_genres=16&with_keywords=1438`,
    other: `${BASE_URL_TV}&with_genres=18&without_genres=16,9648,10765,80,35&without_keywords=9840,15126,15060,248451,193400,293194,10873,208788,11612,13005,10909,6078,1438,6270`,
  };

  const categoryUrl = urls[category] || urls.base;
  let filteredResults = [...prevResults];
  let page = currentPage;
  let hasMore = true;

  try {
    while (filteredResults.length < currentPage * itemsPerPage && page <= apiPages) {
      const apiUrl = `${categoryUrl}&page=${page}`;
      const response = await axios.get(apiUrl, options);
      const apiResults = response.data.results;

      const newFilteredResults = apiResults.filter(
        (item) =>
          hasKorean(item.name) || hasKorean(item.title) || hasKorean(item.overview) || item.original_language === 'ko'
      );

      const uniqueResults = [...filteredResults, ...newFilteredResults].filter(
        (item, index, self) => index === self.findIndex((t) => t.id === item.id)
      );

      filteredResults = uniqueResults;
      page++;
    }

    if (page <= apiPages || filteredResults.length > currentPage * itemsPerPage) {
      hasMore = true;
    } else {
      hasMore = false;
    }

    return {
      dramas: filteredResults.slice(0, currentPage * itemsPerPage),
      hasMore,
      currentPage: currentPage,
    };
  } catch (error) {
    console.error(error);
    return {
      dramas: [],
      hasMore: false,
      currentPage: 1,
    };
  }
});
