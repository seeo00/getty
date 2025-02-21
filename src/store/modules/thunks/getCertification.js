import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_API_KEY_V3;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

export const getCertification = createAsyncThunk(
  'Certification/getCertification',
  async ({ tvId }, thunkAPI) => {
    try {
      // TV 콘텐츠의 인증 정보 엔드포인트
      const url = `${BASE_URL}/tv/${tvId}/content_ratings?api_key=${API_KEY}`;
      const response = await axios.get(url, options);
      // 인증 정보는 results 배열에 들어있습니다.
      const certifications = response.data.results;
      return certifications;
    } catch (error) {
      console.error('Error fetching certifications:', error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
