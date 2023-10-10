import axios from "axios";

const { REACT_APP_API_END_POINT } = process.env;

const instance = axios.create({
    baseURL: REACT_APP_API_END_POINT
});

instance.interceptors.request.use(function (config:any) {
    config.headers.Authorization = localStorage.getItem('keycloakToken') ? `Bearer ${localStorage.getItem('keycloakToken')}`:'';
    return config;
  }, error =>{
    Promise.reject(error)
  })
  
  instance.interceptors.response.use(response=>{
    return response;
  }, function(error){
    return Promise.reject(error)
  });

export default instance;