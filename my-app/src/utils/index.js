import { FormatListNumbered } from "@mui/icons-material";
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

export const checkYearMonthValid = (
  startYear,
  startMonth,
  endYear,
  endMonth,
  isPresent
) => {
  let valid = true;

  if (
    endYear === "" ||
    endMonth === "" ||
    startYear === "" ||
    startMonth === ""
  )
    return !valid;
  const d = new Date();
  let month = d.getMonth() + 1;
  let year = d.getFullYear;
  if (isPresent) {
    if (startYear > year) {
      valid = false;
    } else if (startMonth > month) {
      valid = false;
    }
  } else {
    if (startYear > endYear) {
      valid = false;
    } else {
      if (startMonth > endMonth) {
        valid = false;
      }
    }
  }

  return !valid;
};
