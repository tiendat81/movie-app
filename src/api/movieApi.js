import axiosClient from './axiosClient';

const movieApi = {
  getByName(searchTerm) {
    const url = `${process.env.REACT_APP_BASE_URL}/?s=${searchTerm}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;
    return axiosClient.get(url);
  },
};

export default movieApi;
