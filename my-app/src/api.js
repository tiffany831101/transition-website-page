import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;
console.log("baseurl: ", baseURL);
const request = axios.create({
  baseURL, // Replace with your API base URL
});

export const userSignup = (params) => request.post("/signup", params);
export const userSignin = (params) => request.post("/signin", params);
