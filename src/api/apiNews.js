import axios from "axios";

const BASE_URL = "https://api.currentsapi.services/v1/";

const API_KEY = "wdONqWHTA7ZF8EnSIS3IJXPY0WHqLVcsqI0_9AFGMrhXdIHi";

export const getNews = async ({
  page_number,
  page_size = 10,
  category,
  keywords,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords,
      },
    });
    return response.data;
  } catch (error) {
    console.warn(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.warn(error);
  }
};
