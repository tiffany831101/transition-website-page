import jwt_decode from "jwt-decode";

export const ValidateSignature = (token) => {
  try {
    const decoded = jwt_decode(token);
    return decoded;
  } catch (err) {
    throw err;
  }
};
