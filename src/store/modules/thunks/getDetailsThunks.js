import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY_V3 = import.meta.env.VITE_API_KEY_V3;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const optionsv3 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

// 전체 details
export const getDetails = createAsyncThunk('details/getDetails', async ({ id, contentType = 'tv' }) => {
  try {
    const korUrl = `${BASE_URL}/${contentType}/${id}?language=ko-KR&append_to_response=credits,similar,videos,reviews,seasons`;
    const korResponse = await axios.get(korUrl, options);

    const needEngVideos = !korResponse.data.videos?.results?.length;
    const needEngReviews = !korResponse.data.reviews?.results?.length;

    if (needEngVideos || needEngReviews) {
      const engUrl = `${BASE_URL}/${contentType}/${id}?language=en-US&append_to_response=${
        needEngVideos ? 'videos' : ''
      }${needEngVideos && needEngReviews ? ',' : ''}${needEngReviews ? 'reviews' : ''}`;
      const engResponse = await axios.get(engUrl, options);

      return {
        ...korResponse.data,
        videos: needEngVideos ? engResponse.data.videos : korResponse.data.videos,
        reviews: needEngReviews ? engResponse.data.reviews : korResponse.data.reviews,
      };
    }

    return korResponse.data;
  } catch (error) {
    console.error(error);
  }
});

// details 내부 에피소드
export const getEpisode = createAsyncThunk(
  'Episode/getEpisode',
  async ({ tvId = '1399', seasonNumber = '1' }, thunkAPI) => {
    try {
      // v3 엔드포인트: api_key는 쿼리 파라미터로 전달
      const url = `${BASE_URL}/tv/${tvId}/season/${seasonNumber}?language=ko-KR&api_key=${API_KEY_V3}`;
      const response = await axios.get(url, optionsv3);
      const episodes = response.data.episodes;
      return episodes;
    } catch (error) {
      console.error('Error fetching episodes:', error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 자격 정보
export const getCertification = createAsyncThunk('Certification/getCertification', async ({ tvId }, thunkAPI) => {
  try {
    // TV 콘텐츠의 인증 정보 엔드포인트
    const url = `${BASE_URL}/tv/${tvId}/content_ratings?api_key=${API_KEY_V3}`;
    const response = await axios.get(url, optionsv3);
    // 인증 정보는 results 배열에 들어있습니다.
    const certifications = response.data.results;
    return certifications;
  } catch (error) {
    console.error('Error fetching certifications:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

// 추천
export const getRecommendations = createAsyncThunk(
  'Episode/getEpisode',
  async ({ tvId = '1399', seasonNumber = '1' }, thunkAPI) => {
    try {
      // v3 엔드포인트: api_key는 쿼리 파라미터로 전달
      const url = `${BASE_URL}/tv/${tvId}/season/${seasonNumber}?language=ko-KR&api_key=${API_KEY_V3}`;
      const response = await axios.get(url, optionsv3);
      const recommendations = response.data.recommendations;
      return recommendations;
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
