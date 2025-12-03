import axios from 'axios';

const apikey = import.meta.env.VITE_TMDB_API_KEY;
const baseurl = import.meta.env.VITE_TMDB_BASE_URL;

export async function fetchPopularMovies() {
  const response = await axios.get(`${baseurl}/movie/popular`, { params: { api_key: apikey } });
  return response.data.results;
}

export async function fetchTrendingMovies() {
  const response = await axios.get(`${baseurl}/trending/all/day`, { params: { api_key: apikey, language: 'en-US' } });
  return response.data.results;
}

export async function fetchPopularTV() {
  const response = await axios.get(`${baseurl}/tv/popular`, { params: { api_key: apikey } });
  return response.data.results;
}

export async function TrendingTV() {
  const response = await axios.get(`${baseurl}/trending/tv/day`, { params: { api_key: apikey, language: 'en-US' } });
  return response.data.results;
}

export async function fetchLatestMovies() {
  try {
    const response = await axios.get(`${baseurl}/movie/now_playing`, { params: { api_key: apikey } });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching latest movies:', error);
    return [];
  }
}

export async function LatestTV() {
  try {
    const response = await axios.get(`${baseurl}/tv/latest`, { params: { api_key: apikey } });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching latest tv:', error);
    return [];
  }
}

export async function LatestMovie() {
  try {
    const response = await axios.get(`${baseurl}/movie/now_playing`, { params: { api_key: apikey, language: 'en-US', page: 1 } });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching latest movies:', error);
    return [];
  }
};


export async function TopMovies() {
  try {
    const response = await axios.get(`${baseurl}/movie/top_rated`, {
      params: { api_key: apikey, language: 'en-US', page: 1 }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top movies:', error);
    return [];
  }
}

export async function TopTV() {
  try {
    const response = await axios.get(`${baseurl}/tv/top_rated`, {
      params: { api_key: apikey, language: 'en-US', page: 1 }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top tv:', error);
    return [];
  }
}
