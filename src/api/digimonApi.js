import axios from "axios";

export const digimonApi = axios.create({
    baseURL: 'https://digi-api.com/api/v1',
    // timeout: 8000,
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });