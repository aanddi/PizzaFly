import axios from 'axios'

import { SERVER_URL } from './env'

export const instance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
})