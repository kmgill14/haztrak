// Use the Preprod API to get RCRAInfo/e-Manifest data

import {} from 'dotenv/config'
import axios from 'axios'

const axiosGet = axios.create({
  baseURL: `${process.env.BASE_URL}`,
  method: 'get'
})

const axiosPost = axios.create({
  baseURL: 'https://rcrainfopreprod.epa.gov/rcrainfo/rest/api/v1/',
  method: 'post'
})

const axiosAuth = axios.create({
  baseURL: 'https://rcrainfopreprod.epa.gov/rcrainfo/rest/api/v1/auth/',
  method: 'get'
})

axiosGet.interceptors.request.use(async function (config) {
  const response = await axiosAuth({
    url: `./${process.env.RCRAINFO_API_ID}/${process.env.RCRAINFO_API_KEY}`
  })
  config.headers.Authorization = 'Bearer ' + response.data.token
  return config
}, function (error) {
  console.log(error)
})

axiosPost.interceptors.request.use(async function (config) {
  const response = await axiosAuth({
    url: `./${process.env.RCRAINFO_API_ID}/${process.env.RCRAINFO_API_KEY}`
  })
  config.headers.Authorization = 'Bearer ' + response.data.token
  return config
}, function (error) {
  console.log(error)
})

export { axiosGet as get, axiosPost as post }

// Testing area
// const siteID  = 'VATEST000001';
// const siteDate = getSiteExistInt(siteID)
