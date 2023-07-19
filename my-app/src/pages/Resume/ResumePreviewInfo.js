import React, { Component } from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "@mui/material/Link";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ResumePreviewInfo = ({ modalData, uploadedImage }) => {
  return (
    <>
      <Box
        style={{ minHeight: "300px", minWidth: "500px" }}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="d-flex justify-content-center flex-wrap">
          <div className="col-12 d-flex justify-content-center">
            <div className="mb-2">
              {uploadedImage === null ? (
                <AccountCircleIcon
                  style={{ color: "#d9d9d9", width: "100%", height: "100px" }}
                />
              ) : (
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    border: "1px",
                    borderRadius: "50%",
                    backgroundImage: `url(${uploadedImage})`,
                    backgroundSize: "cover",
                  }}
                />
              )}
            </div>
            {/* <Button size="small" variant="contained" component="label">
              Upload File
              <input type="file" hidden onChange={handleFileUpload} />
            </Button> */}
          </div>

          <div className="d-flex col-12 justify-content-center">
            <h3>{modalData.job_title}</h3>
          </div>

          <div className="d-flex">
            <div className="d-flex mt-3 align-items-center">
              <Link href={modalData.Facebook}>
                <FacebookIcon style={{ fontSize: "2rem", color: "#1877F2" }} />
              </Link>
            </div>
            <div className="d-flex mt-3 align-items-center">
              <Link href={modalData.GitHub}>
                <GitHubIcon style={{ fontSize: "2rem", color: "#0072b1" }} />
              </Link>
            </div>
            <div className="d-flex mt-3 align-items-center">
              <Link href={modalData.LinkedIn}>
                <LinkedInIcon style={{ fontSize: "2rem", color: "#0072b1" }} />
              </Link>
              {/* <TextField
              style={{ width: "60%" }}
              id="city"
              label="LinkedIn"
              name="LinkedIn"
              defaultValue=""
              variant="standard"
              value={modalData.LinkedIn}
              disabled
            /> */}
            </div>
            <div className="d-flex mt-3 align-items-center">
              {/* <GoogleIcon style={{ fontSize: "2rem", color: "#DB4437" }} /> */}

              <Link href={modalData.Google}>
                <GoogleIcon style={{ fontSize: "2rem", color: "#DB4437" }} />
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap col-12 justify-content-center">
          <div className="col-8 d-flex justify-content-center">
            <TextField
              required
              id="first_name"
              name="first_name"
              label="First Name"
              defaultValue=""
              variant="standard"
              value={modalData.first_name}
              disabled
            />
            <TextField
              required
              id="last_name"
              name="last_name"
              label="Last Name"
              defaultValue=""
              variant="standard"
              value={modalData.last_name}
              disabled
            />
          </div>
          <div className="col-8 d-flex justify-content-center">
            <TextField
              required
              id="country"
              label="Country"
              name="country"
              defaultValue=""
              variant="standard"
              value={modalData.country}
              disabled
            />
            <TextField
              required
              id="city"
              name="city"
              label="City"
              defaultValue=""
              variant="standard"
              value={modalData.city}
              disabled
            />
          </div>
          <div className="col-8">
            <div className="d-block mt-3">
              <TextField
                style={{ width: "100%" }}
                id="self_intro_short"
                label="Self Introduction(Brief)"
                name="self_intro_short"
                multiline
                rows={5}
                disabled
                defaultValue=""
                variant="filled"
                value={modalData.self_intro_short}
              />
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default ResumePreviewInfo;
