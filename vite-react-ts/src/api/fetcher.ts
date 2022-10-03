import axios from 'axios'

const BASE_URL = 'http://localhost:400'

const fetcher = {
  get: <T = unknown>(url: string): Promise<T> => {
    // return fetch(url).then((res) => res.json())
    return axios.get<T>(url).then((response) => response.data)
  },
}

export { fetcher, BASE_URL }
