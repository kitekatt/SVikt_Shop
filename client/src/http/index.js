import axios from 'axios'
//запросы от всех посетителей
const guestInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true // отправлять cookie разрешено
})
//запросы от авторизованных пользователей
const authInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true // отправлять cookie разрешено
})
//добавление в запрос данных для авторизации с помощью перехватчика interceptor
const authInterceptor = (config) => {
   const token = localStorage.getItem('token')
   if (token) {
      config.headers.authorization = 'Bearer' + localStorage.getItem('token')
   }
   return config
}
authInstance.interceptors.request.use(authInterceptor)

export {
   guestInstance,
   authInstance
}