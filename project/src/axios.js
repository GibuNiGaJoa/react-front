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

//게시글 조회
export const getPosting = (method, url) => {
  return axios({
    method,
    url: url,
  })
  .then((res) => res.data)
  .catch((err) => console.log(err));
}

// 게시물 리턴값 받기 테스트용
export const postingReq = (method,url) => {
  return axios({
    method,
    url:  url,
  })
  .then((res) => res.data)
  .catch((err) => console.log(err));
};

export const suggestCheckReq = (method,url) => {
  return axios({
    method,
    url:  url,
  })
  .then((res) => res.data)
  .catch((err) => console.log(err));
};

export const getSearch = (method,url) => {
  return axios({
    method,
    url:  url,
  })
  .then((res) => res.data)
  .catch((err) => console.log(err));
};


