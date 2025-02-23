import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_API_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

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
