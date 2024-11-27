import axios from "axios";

const axiosInstance = axios.create({
  // firebase deployed
  // baseURL : "not-working"
  
  //  using render
    baseURL :"https://amazon-api-deploy-8y6g.onrender.com"
});

export { axiosInstance };