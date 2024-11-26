import axios from "axios";

const axiosInstance = axios.create({
  // firebase deployed
  // baseURL : "not-working"
  
  //  using render
    baseURL :'https://amazon-api-deploy-35q7.onrender.com'
});

export { axiosInstance };