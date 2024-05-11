import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_BE_URL; // Base URL of your API
const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

 export const fetchUser = async () => {
  try {
    const response = await client.get(`/users`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
};

export const postUser = async (data) => {
  try {
    console.log("Pokeon" + client.baseURL);
    const response = await client.post(`/users/create`, data);
    return response.data;
  } catch (error) {
    console.error('Failed to post data:', error);
    throw error;
  }
};