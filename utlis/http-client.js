import axios from "axios"

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  headers: { Accept: "application/json" },
})

axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
