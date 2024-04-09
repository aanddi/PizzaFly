import axios from 'axios'

import { SERVER_URL } from './env'

export const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})