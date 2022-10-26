import axios from 'axios'


const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
}


export default getPosts;