<<<<<<< Updated upstream
import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_BE_URL; // Base URL of your API
=======
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_BE_URL; // Base URL of your API

>>>>>>> Stashed changes
const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

<<<<<<< Updated upstream
 export const fetchUser = async () => {
  try {
    const response = await client.get(`/users`);
=======
export const fetchData = async () => {
  try {
    const response = await client.get(`${API_BASE_URL}/users`);
>>>>>>> Stashed changes
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
};

<<<<<<< Updated upstream
export const postUser = async (data) => {
  try {
    console.log("Pokeon" + client.baseURL);
    const response = await client.post(`/users/create`, data);
    return response.data;
=======
export const postData = async (data) => {
  try {
    const response = await client.post(`${API_BASE_URL}/users/create`, data);
    return response;
>>>>>>> Stashed changes
  } catch (error) {
    console.error("Failed to post data:", error);
    throw error;
  }
};
export const loginData = async (data) => {
  try {
    const response = await client.post(`${API_BASE_URL}/users/login`, data);
    return response;
  } catch (error) {
    console.log("error from backend.....",error.message);
    throw error;
  }
<<<<<<< Updated upstream
};
=======
};
>>>>>>> Stashed changes
