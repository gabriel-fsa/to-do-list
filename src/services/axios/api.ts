import axios from 'axios'

export const api = axios.create({
  baseURL:
    process.env.REACT_APP_BACKEND_URL ||
    'https://todo-list-portifolio.herokuapp.com/' ||
    'http://localhost:3001/',
  // baseURL: 'https://todo-list-gabriel.herokuapp.com/',
})
