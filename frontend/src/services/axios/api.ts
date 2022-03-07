import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001/',
  // baseURL: 'https://todo-list-gabriel.herokuapp.com/',
})
