import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { hasKorean } from '../../../utils/regexUtils';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL_TV = `${BASE_URL}/discover/tv?language=ko-KR&vote_average.gte=6&vote_count.gte=20`;
// 기본 필터 : 한국어, 평점 6이상, 투표수 20개 이상
// default 인기순 정렬

const NETWORKS = '43|4|213|65|2552|2739|156|1796|106|1024|829|342|97';
const itemsPerPage = 20;
const apiPages = 5;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getDocumentary = createAsyncThunk(
  'documentary/getDocumentary',
  async ({ category, currentPage = 1, prevResults = [] }) => {
    const urls = {
      base: `${BASE_URL_TV}&with_networks=${NETWORKS}&with_genres=99|10763`,
      news: `${BASE_URL_TV}&with_networks=${NETWORKS}&with_genres=99|10763&with_keywords=6078|191509`,
      drama: `${BASE_URL_TV}&with_networks=${NETWORKS}&with_genres=99,18&without_genres=10749`,
      history: `${BASE_URL_TV}&with_networks=${NETWORKS}&with_genres=99,10768`,
      nature: `${BASE_URL_TV}&with_networks=${NETWORKS}&with_genres=99&with_keywords=18330|221355`,
      crime: `${BASE_URL_TV}&with_networks=${NETWORKS}&with_genres=99,80`,
      life: `${BASE_URL_TV}&with_networks=${NETWORKS}&with_genres=99,10764`,
      sports: `${BASE_URL_TV}&with_networks=${NETWORKS}&with_genres=99&with_keywords=159290|6075`,
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
        const newFilteredResults = apiResults
          .filter(
            (item) =>
              hasKorean(item.name) ||
              hasKorean(item.title) ||
              hasKorean(item.overview) ||
              item.original_language === 'ko'
          )
          .map((item) => ({
            ...item,
            media_type: 'tv',
          }));

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
        documentaries: filteredResults.slice(0, currentPage * itemsPerPage),
        hasMore,
        currentPage: currentPage,
      };
    } catch (error) {
      console.error(error);
      return {
        documentaries: [],
        hasMore: false,
        currentPage: 1,
      };
    }
  }
);
