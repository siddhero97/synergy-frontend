import axios from 'axios';
const API_BASE_URL = process.env.BACKEND_URL; // Base URL of your API

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

 const fetchData = async () => {
  try {
    const response = await client.get(`API_BASE_URL/users`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
};

const postData = async (data) => {
  try {
    const response = await client.post(`API_BASE_URL/users/create`, data);
    return response.data;
  } catch (error) {
    console.error('Failed to post data:', error);
    throw error;
  }
};

module.exports={
    fetchData,postData
}