import Axios from 'axios'

const HEROKU_URL = 'https://radiant-earth-48941.herokuapp.com/blog'
const LOCAL_URL = 'http://localhost:3001/blog'
export const BASE_URL =
  process.env.NODE_ENV === 'blog_development' ? LOCAL_URL : HEROKU_URL

const Client = Axios.create({ baseURL: BASE_URL })

// Intercepts every request axios makes
Client.interceptors.request.use(
  (config) => {
    // Reads the token in localStorage
    const token = localStorage.getItem('token')
    // if the token exists, we set the authorization header
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config // We return the new config if the token exists or the default config if no token exists.
    // Provides the token to each request that passes through axios
  },
  (error) => Promise.reject(error)
)

export default Client
