import jwt_decode from "jwt-decode";

export const ValidateSignature = (token) => {
  try {
    const decoded = jwt_decode(token);
    return decoded;
  } catch (err) {
    throw err;
  }
};

export const isValidPassword = (password) => {
  const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password);
  console.log("pass: ", pass);
  return pass;
  // return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password);
};
