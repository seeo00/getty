import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { hasKorean } from '../../../utils/regexUtils';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_URL_MOVIE = `${BASE_URL}/discover/movie?language=ko-KR&vote_average.gte=6&vote_count.gte=20`;
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

export const getMovie = createAsyncThunk('movie/getMovie', async ({ category, currentPage = 1, prevResults = [] }) => {
  const urls = {
    base: `${BASE_URL_MOVIE}`,
    romance: `${BASE_URL_MOVIE}&without_genres=16&with_genres=10749`,
    comedy: `${BASE_URL_MOVIE}&without_genres=16&with_genres=35`,
    animation: `${BASE_URL_MOVIE}&with_genres=16`,
    mystery: `${BASE_URL_MOVIE}&without_genres=16&with_genres=9648|53`,
    adventure: `${BASE_URL_MOVIE}&without_genres=16&with_genres=12`,
    action: `${BASE_URL_MOVIE}&without_genres=16&with_genres=28`,
    fantasy: `${BASE_URL_MOVIE}&without_genres=16&with_genres=878|14`,
    horror: `${BASE_URL_MOVIE}&without_genres=16&with_genres=27`,
    documentary: `${BASE_URL_MOVIE}&without_genres=16&with_genres=99`,
    music: `${BASE_URL_MOVIE}&without_genres=16&with_genres=10402`,
    war: `${BASE_URL_MOVIE}&without_genres=16&with_genres=10752`,
    crime: `${BASE_URL_MOVIE}&without_genres=16&with_genres=80`,
    family: `${BASE_URL_MOVIE}&without_genres=16&with_genres=10751`,
    other: `${BASE_URL_MOVIE}&without_genres=16,10749,35,9468,53,12,28,878,14,27,99,10402,10752,80,10751`,
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
      movies: filteredResults.slice(0, currentPage * itemsPerPage),
      hasMore,
      currentPage: currentPage,
    };
  } catch (error) {
    console.error(error);
    return {
      movies: [],
      hasMore: false,
      currentPage: 1,
    };
  }
});
