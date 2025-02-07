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

export const getAnimation = createAsyncThunk(
  'animation/getAnimation',
  async ({ category, currentPage = 1, prevResults = [] }) => {
    const urls = {
      base: `${BASE_URL_TV}&with_genres=16`,
      adventure: `${BASE_URL_TV}&with_genres=16,10759`,
      fantasy: `${BASE_URL_TV}&with_genres=16,10765`,
      romance: `${BASE_URL_TV}&with_genres=16&with_keywords=9840`,
      comedy: `${BASE_URL_TV}&with_genres=16,35`,
      sports: `${BASE_URL_TV}&with_genres=16&with_keywords=6075`,
      mystery: `${BASE_URL_TV}&with_genres=16,9648`,
      life: `${BASE_URL_TV}&with_genres=16&with_keywords=9914`,
      kids: `${BASE_URL_TV}&with_genres=16,10762`,
      other: `${BASE_URL_TV}&with_genres=16&without_genres=10759,10765,9840,35,9648,10762&without_keywords=9840,6075,9914`,
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
        animations: filteredResults.slice(0, currentPage * itemsPerPage),
        hasMore,
        currentPage: currentPage,
      };
    } catch (error) {
      console.error(error);
      return {
        animations: [],
        hasMore: false,
        currentPage: 1,
      };
    }
  }
);
