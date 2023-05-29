import axios from "axios";

export const digimonApi = axios.create({
    baseURL: 'https://www.digi-api.com/api/v1/digimon',
  });