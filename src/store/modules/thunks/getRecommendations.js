import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY_V3;
const BASE_URL = 'https://api.themoviedb.org/3';
// 조건 제거: language만 유지 (필요에 따라 추가 조건 제거)
const BASE_URL_TV = `${BASE_URL}/discover/tv?language=ko-KR`;
const itemsPerPage = 20;
const apiPages = 5;

export const getRecommendations = createAsyncThunk(
  'recommendations/getRecommendations',
  async ({ category, currentPage = 1, prevResults = [] }) => {
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
        const apiUrl = `${categoryUrl}&page=${page}&api_key=${API_KEY}`;
        const response = await axios.get(apiUrl);
        const apiResults = response.data.results;

        const newFilteredResults = apiResults.map((item) => ({
          ...item,
          media_type: item.media_type || 'tv',
        }));

        const uniqueResults = [...filteredResults, ...newFilteredResults].filter(
          (item, index, self) => index === self.findIndex((t) => t.id === item.id)
        );

        filteredResults = uniqueResults;
        page++;
      }

      hasMore = (page <= apiPages || filteredResults.length > currentPage * itemsPerPage);

      return {
        recommendations: filteredResults.slice(0, currentPage * itemsPerPage),
        hasMore,
        currentPage: currentPage,
      };
    } catch (error) {
      console.error(error);
      return {
        recommendations: [],
        hasMore: false,
        currentPage: 1,
      };
    }
  }
);
