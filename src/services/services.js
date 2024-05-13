import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_BE_URL; // Base URL of your API

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchUserById = async (userId) => {
  try {
    const response = await client.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
};


export const postUser = async (data) => {
  try {
    const response = await client.post(`${API_BASE_URL}/users/create`, data);
    return response;
  } catch (error) {
    console.error('Failed to post data:', error);
    throw error;
  }
};
export const loginUser = async (data) => {
  try {
    const response = await client.post(`${API_BASE_URL}/users/login`, data);
    return response;
  } catch (error) {
    console.log("error from backend.....",error.message);
    throw error;
  }
};

export const postContact = async (userId,data) => {
  try {
    const response = await client.post(`${API_BASE_URL}/contacts/create/${userId}`, data);
    return response;
  } catch (error) {
    console.error('Failed to post data:', error);
    throw error;
  }
};