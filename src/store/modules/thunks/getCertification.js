import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { hasKorean } from '../../../utils/regexUtils';

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
  async ({ tvId = '1399', seasonNumber = '1' }, thunkAPI) => {
    try {
      // v3 엔드포인트: api_key는 쿼리 파라미터로 전달
      const url = `${BASE_URL}/tv/${tvId}/season/${seasonNumber}?language=ko-KR&api_key=${API_KEY}`;
      const response = await axios.get(url, options);
      const certifications = response.data.certifications;
      return certifications;
    } catch (error) {
      console.error('Error fetching certifications:', error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
