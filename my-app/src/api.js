import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;
console.log("baseurl: ", baseURL);

const headers = localStorage.getItem("token")
  ? {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  : {};
const request = axios.create({
  baseURL, // Replace with your API base URL
  headers,
});

export const userSignup = (params) => request.post("/signup", params);
export const userSignin = (params) => request.post("/signin", params);
export const getGoogleAuthStatus = () => request.get("/auth/callback/success");
export const postResume = (params) => request.post("/create_resume", params);
export const generatePdf = (params) => request.post("/generate_pdf", params);
