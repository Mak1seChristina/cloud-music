import axios from 'axios'

const http = axios.create({
  // 请求根路径
  baseURL: 'https://vercel.com/mak1sechristina/cloud-music'
})

export default http
