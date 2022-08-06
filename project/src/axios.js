import axios from "axios";

const Domain = "http://valuetogether.tk"

// axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해
export const request = (method, url, data) => {
  return axios({
    method,
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

