// src/store/modules/thunks/getRecommendations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_API_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

export const getRecommendations = createAsyncThunk(
  'recommendations/getRecommendations',
  async ({ type, id, seasonNumber = '1' }, thunkAPI) => {
    try {
      let url = '';
      if (type === 'movie') {
        url = `${BASE_URL}/movie/${id}/recommendations?language=ko-KR&api_key=${API_KEY}`;
        const response = await axios.get(url, options);
        const recommendations = response.data.results;
        return recommendations;
      } else if (type === 'tv') {
        url = `${BASE_URL}/tv/${id}/recommendations?language=ko-KR&api_key=${API_KEY}`;
        const response = await axios.get(url, options);
        const recommendations = response.data.results;
        return recommendations;
      } else if (type === 'both') {
        // 영화와 TV 추천 데이터를 동시에 가져옴
        const movieUrl = `${BASE_URL}/movie/${id}/recommendations?language=ko-KR&api_key=${API_KEY}`;
        const tvUrl = `${BASE_URL}/tv/${id}/recommendations?language=ko-KR&api_key=${API_KEY}`;
        const [movieResponse, tvResponse] = await Promise.all([
          axios.get(movieUrl, options),
          axios.get(tvUrl, options),
        ]);
        const movieRecommendations = movieResponse.data.results;
        const tvRecommendations = tvResponse.data.results;
        return { movieRecommendations, tvRecommendations };
      } else {
        return thunkAPI.rejectWithValue('Invalid content type');
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
