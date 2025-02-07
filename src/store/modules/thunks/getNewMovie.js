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

// 새로 올라온 영화 (오늘부터 14일 전까지 공개된 영화)
export const getNewMovie = createAsyncThunk('movie/getNewMovie', async () => {
  try {
    const pastDate = getFormattedDate(14);
    const today = getFormattedDate(0);

    const url = `${BASE_URL}/discover/movie?language=ko-KR&primary_release_date.gte=${pastDate}&primary_release_date.lte=${today}&region=KR`;
    const response = await axios.get(url, options);

    return response.data.results.filter(
      (item) =>
        hasKorean(item.name) || hasKorean(item.title) || hasKorean(item.overview) || item.original_language === 'ko'
    );
  } catch (error) {
    console.error(error);
    return [];
  }
});
