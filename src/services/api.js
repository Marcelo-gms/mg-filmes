import axios from "axios"

// url base: https://api.themoviedb.org/3

// url: /movie/now_playing?api_key=ced607e0f4a65cc45ad3e7566a209b27&language-pt-BR


const api = axios.create({
  baseURL:"https://api.themoviedb.org/3/"
})

export default api