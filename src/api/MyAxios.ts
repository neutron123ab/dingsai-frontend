import type { AxiosInstance } from 'axios'
import axios from 'axios'

const env = import.meta.env
const myAxios: AxiosInstance = axios.create({
  baseURL: env.VITE_BASE_API
})

export default myAxios
