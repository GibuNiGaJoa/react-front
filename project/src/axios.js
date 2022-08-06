import axios from "axios";

<<<<<<< HEAD
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해


const Domain = "http://43.200.162.222"

// 평균적인 통신
export const request = (method,url,data) => {

  return axios({
    method, 
=======
const Domain = "http://valuetogether.tk"

// axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해
export const request = (method, url, data) => {
  return axios({
    method,
>>>>>>> 83c0d7cad63f55d73c1ed70021a4eb3190949edd
    url: url,
    data,
  })
  .then((res) => res.data)
  .catch((err) => console.log(err));
};

// // 토큰체크용
// export const requestToken = (method,url) => {
//   return axios({
//     method,
//     url:  url,
//   })
//   .then((res) => res.data)
//   .catch((err) => console.log(err));
// };

