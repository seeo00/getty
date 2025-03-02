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
<<<<<<< HEAD
		Authorization: `Bearer ${API_KEY_V3}`,
=======
>>>>>>> origin/dev
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
<<<<<<< HEAD
  async ({ tvId = '1399', seasonNumber = '1', contentType }, thunkAPI) => {
    // 영화일 경우 에피소드가 없으므로 빈 배열 반환
    if (contentType === 'movie') {
      return [];
    }
    try {
=======
  async ({ tvId = '1399', seasonNumber = '1' }, thunkAPI) => {
    try {
      // v3 엔드포인트: api_key는 쿼리 파라미터로 전달
>>>>>>> origin/dev
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

<<<<<<< HEAD
// // TV 추천 목록 가져오기
// export const getTVRecommendations = createAsyncThunk(
//   'tv/getTVRecommendations',
//   async (tvId, thunkAPI) => {
//     try {
//       let allResults = [];
//       let page = 1;
//       const seenIds = new Set();

//       while (allResults.length < 24 && page <= 10) {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/tv/${tvId}/recommendations`,
//           {
//             ...options,
//             params: { language: 'ko-KR', page }, // 필요한 파라미터 추가
//           }
//         );

//         if (!response.data.results.length) break;

//         const filteredResults = response.data.results.filter(
//           (tv) =>
//             tv.overview &&
//             tv.poster_path &&
//             tv.backdrop_path &&
//             !seenIds.has(tv.id)
//         );

//         filteredResults.forEach((tv) => {
//           if (allResults.length < 24) {
//             seenIds.add(tv.id);
//             allResults.push(tv);
//           }
//         });

//         page++;
//       }

//       return allResults.slice(0, 24);
//     } catch (error) {
//       console.error('TV 추천 오류:', error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // 영화 추천 목록 가져오기
// export const getMovieRecommendations = createAsyncThunk(
//   'movie/getMovieRecommendations',
//   async (movieId, thunkAPI) => {
//     try {
//       let allResults = [];
//       let page = 1;
//       const seenIds = new Set();

//       while (allResults.length < 24 && page <= 10) {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
//           {
//             ...options,
//             params: { language: 'ko-KR', page }, // 필요한 파라미터 추가
//           }
//         );

//         if (!response.data.results.length) break;

//         const filteredResults = response.data.results.filter(
//           (movie) =>
//             movie.overview &&
//             movie.poster_path &&
//             movie.backdrop_path &&
//             !seenIds.has(movie.id)
//         );

//         filteredResults.forEach((movie) => {
//           if (allResults.length < 24) {
//             seenIds.add(movie.id);
//             allResults.push(movie);
//           }
//         });

//         page++;
//       }

//       return allResults.slice(0, 24);
//     } catch (error) {
//       console.error('영화 추천 오류:', error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// TV와 영화 추천을 모두 처리하는 recommend thunk
export const getRecommendations = createAsyncThunk(
  'recommend/getRecommendations',
  async ({ type, id }, thunkAPI) => {
    try {
      let allResults = [];
      let page = 1;
      const seenIds = new Set();

      // type에 따라 엔드포인트 선택
      let endpoint = '';
      if (type === 'tv') {
        endpoint = `https://api.themoviedb.org/3/tv/${id}/recommendations`;
      } else if (type === 'movie') {
        endpoint = `https://api.themoviedb.org/3/movie/${id}/recommendations`;
      } else {
        throw new Error('지원하지 않는 타입입니다.');
      }

      // 최대 24개의 결과를 10페이지까지 가져옴
      while (allResults.length < 24 && page <= 10) {
        const response = await axios.get(endpoint, {
          ...options,
          params: { language: 'ko-KR', page },
        });

        if (!response.data.results.length) break;

        const filteredResults = response.data.results.filter(
          (item) =>
            item.overview &&
            item.poster_path &&
            item.backdrop_path &&
            !seenIds.has(item.id)
        );

        filteredResults.forEach((item) => {
          if (allResults.length < 24) {
            seenIds.add(item.id);
            allResults.push(item);
          }
        });

        page++;
      }

      return allResults.slice(0, 24);
    } catch (error) {
      console.error('추천 오류:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const getCertification = createAsyncThunk(
  'Certification/getCertification',
  async ({ id, contentType }, thunkAPI) => {
    console.log('전달된 id:', id);
    
    if (contentType === 'movie' && id === '792307') {
      return [{ iso_3166_1: 'US', rating: 'R' }];
    }
    if (contentType === 'movie' && id === '680') {
      return [{ iso_3166_1: 'US', rating: 'R' }];
    }
    if (contentType === 'movie' && id === '915935') {
      return [{ iso_3166_1: 'FR', rating: '16' }];
    }
    if (contentType === 'movie' && id === '598896') {
      return [{ iso_3166_1: 'US', rating: 'PG' }];
    }
    if (contentType === 'movie' && id === '933260') {
      return [{ iso_3166_1: 'GB', rating: 'R18' }];
    }
    if (contentType === 'tv' && id === '69541') {
      return [{ iso_3166_1: 'GB', rating: 'R18' }];
    }
    if (contentType === 'tv' && id === '156644') {
      return [{ iso_3166_1: 'GB', rating: '15' }];
    }
    if (contentType === 'movie' && id === '1050035') {
      return [{ iso_3166_1: 'JP', rating: 'PG-12' }];
    }
    if (contentType === 'movie' && id === '549509') {
      return [{ iso_3166_1: 'US', rating: 'R' }];
    }
    if (contentType === 'movie' && id === '693134') {
      return [{ iso_3166_1: 'US', rating: 'PG' }];
    }
    
		try {
      let url = '';
      if (contentType === 'movie') {
        // 영화: release_dates 엔드포인트 사용 (v3 API)
        url = `${BASE_URL}/movie/${id}/release_dates?api_key=${API_KEY_V3}`;
      } else {
        // TV: content_ratings 엔드포인트 사용 (v3 API)
        url = `${BASE_URL}/tv/${id}/content_ratings?api_key=${API_KEY_V3}`;
      }
      const response = await axios.get(url, optionsv3);

      if (contentType === 'movie') {
        // 영화 데이터의 경우, release_dates 배열 내부의 첫번째 요소의 certification을 rating으로 변환
        const results = response.data.results || [];
        const transformed = results.map(item => ({
          iso_3166_1: item.iso_3166_1,
          rating:
            item.release_dates && item.release_dates.length > 0
              ? item.release_dates[0].certification
              : '',
        }));
        // rating 값이 빈 문자열("")가 아닌 항목들만 필터링하여 반환
        const validCertifications = transformed.filter(item => item.rating !== '');
        return validCertifications;
      }

      return response.data.results;
    } catch (error) {
      console.error('Error fetching certifications:', error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }}
);
=======
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
>>>>>>> origin/dev
