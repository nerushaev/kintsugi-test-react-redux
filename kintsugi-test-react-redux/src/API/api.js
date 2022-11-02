import axios from 'axios'

const BASE_URL = 'https://635d11d6fc2595be26523054.mockapi.io/api/kintsugi';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    _limit: 12
  }
})

export const getItems = async () => {
  const { data } = await instance.get("/");
  return data;
}

export const getItem = async (id) => {
  const { data } = await instance.get(`/${id}`)
  return data;
}