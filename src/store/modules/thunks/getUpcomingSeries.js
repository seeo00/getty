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

// 기대되는 신규 콘텐츠
export const getUpcomingSeries = createAsyncThunk('series/getUpcomingSeries', async () => {
  const tomorrow = getFormattedDate(-1);
  try {
    const url = `${BASE_URL}/discover/tv?language=ko-KR&first_air_date.gte=${tomorrow}`;
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
