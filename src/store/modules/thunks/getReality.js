import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { hasKorean } from '../../../utils/regexUtils';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_API_KEY;
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

export const getReality = createAsyncThunk(
  'reality/getReality',
  async ({ category, currentPage = 1, prevResults = [] }) => {
    const urls = {
      base: `${BASE_URL_TV}&with_genres=10764|10767&without_genres=99`,
      variety: `${BASE_URL_TV}&with_genres=10764&without_keywords=215119,1918,10637,18293,9935,10349,271,250845,4325,6784&without_genres=10767`,
      dating: `${BASE_URL_TV}&with_genres=10764|10767&with_keywords=215119`,
      food: `${BASE_URL_TV}&with_genres=10764|10767&with_keywords=1918|10637|18293`,
      travel: `${BASE_URL_TV}&with_genres=10764|10767&with_keywords=9935`,
      survival: `${BASE_URL_TV}&with_genres=10764|10767&with_keywords=10349|271|250845`,
      game: `${BASE_URL_TV}&with_genres=10764|10767&with_keywords=4325|6784`,
      talk: `${BASE_URL_TV}&with_genres=10767`,
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
        realities: filteredResults.slice(0, currentPage * itemsPerPage),
        hasMore,
        currentPage: currentPage,
      };
    } catch (error) {
      console.error(error);
      return {
        realities: [],
        hasMore: false,
        currentPage: 1,
      };
    }
  }
);
