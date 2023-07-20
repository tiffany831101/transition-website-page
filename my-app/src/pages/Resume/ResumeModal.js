import React, { Component } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { checkYearMonthValid } from "../../utils";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Input from "@mui/material/Input";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Select from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ResumePreviewTable from "./ResumePreviewTable";
import ResumePreviewInfo from "./ResumePreviewInfo";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
const steps = ["基本資料", "工作經歷", "學歷", "證照"];

const StepOneForm = ({
  handleChange,
  modalData,
  handleFileUpload,
  uploadedImage,
}) => {
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
        <div className="d-flex justify-content-center">
          <div>
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
            <Button size="small" variant="contained" component="label">
              Upload File
              <input type="file" hidden onChange={handleFileUpload} />
            </Button>
          </div>
        </div>
        <div>
          <TextField
            required
            id="first_name"
            name="first_name"
            label="First Name"
            defaultValue=""
            variant="standard"
            onChange={handleChange}
            value={modalData.first_name}
          />
          <TextField
            required
            id="last_name"
            name="last_name"
            label="Last Name"
            defaultValue=""
            variant="standard"
            onChange={handleChange}
            value={modalData.last_name}
          />
          <div className="d-block">
            <TextField
              required
              id="country"
              label="Country"
              name="country"
              defaultValue=""
              variant="standard"
              onChange={handleChange}
              value={modalData.country}
            />
            <TextField
              required
              id="city"
              name="city"
              label="City"
              defaultValue=""
              variant="standard"
              onChange={handleChange}
              value={modalData.city}
            />
          </div>
          <TextField
            required
            id="job_title"
            name="job_title"
            label="Preferred Job Title"
            defaultValue=""
            variant="standard"
            onChange={handleChange}
            value={modalData.job_title}
          />

          <div className="d-block mt-3">
            <TextField
              style={{ width: "100%" }}
              id="self_intro_short"
              label="Self Introduction(Brief)"
              name="self_intro_short"
              multiline
              rows={5}
              defaultValue=""
              variant="filled"
              value={modalData.self_intro_short}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex mt-3 align-items-center">
            <FacebookIcon style={{ fontSize: "2rem", color: "#1877F2" }} />
            <TextField
              style={{ width: "60%" }}
              id="city"
              label="Facebook"
              name="Facebook"
              defaultValue=""
              variant="standard"
              value={modalData.Facebook}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex mt-3 align-items-center">
            <GitHubIcon style={{ fontSize: "2rem" }} />

            <TextField
              style={{ width: "60%" }}
              id="city"
              label="GitHub"
              name="GitHub"
              defaultValue=""
              variant="standard"
              value={modalData.GitHub}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex mt-3 align-items-center">
            <LinkedInIcon style={{ fontSize: "2rem", color: "#0072b1" }} />

            <TextField
              style={{ width: "60%" }}
              id="city"
              label="LinkedIn"
              name="LinkedIn"
              defaultValue=""
              variant="standard"
              value={modalData.LinkedIn}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex mt-3 align-items-center">
            <GoogleIcon style={{ fontSize: "2rem", color: "#DB4437" }} />

            <TextField
              name="Gmail"
              style={{ width: "60%" }}
              id="Gmail"
              label="Gmail"
              defaultValue=""
              variant="standard"
              value={modalData.Gmail}
              onChange={handleChange}
            />
          </div>
        </div>
      </Box>
    </>
  );
};

const StepTwoForm = ({
  data,
  addNewExperience,
  handleChange,
  handleDelete,
}) => {
  const month = [];
  for (let i = 1; i <= 12; i++) {
    month.push(i);
  }
  const year = [];
  for (let i = 2023; i >= 1950; i--) {
    year.push(i);
  }

  return (
    <Box style={{ minHeight: "300px", minWidth: "500px" }}>
      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        onClick={addNewExperience}
      >
        <AddIcon />
        Add
      </Fab>

      {data.map((ele, idx) => {
        return (
          <Box key={idx} className="mt-3">
            <div>
              {/* <p
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bolder",
                }}
              >
                Job {idx + 1}
              </p> */}
              <Divider className="my-2">
                <Chip
                  color="secondary"
                  label={`Job ${idx + 1}`}
                  onDelete={(e) => handleDelete(idx)}
                  deleteIcon={<DeleteIcon fontSize="large" id={idx} />}
                  variant="filled"
                  // onClick={(e, idx) => handleDelete(e, idx)}
                />
              </Divider>

              <TextField
                id="job_name"
                name="job_name"
                label="Job Name"
                defaultValue=""
                variant="standard"
                onChange={(e) => handleChange(e, idx)}
                value={ele["job_name"]}
              />
              <TextField
                id="company_name"
                name="company_name"
                label="Company Name"
                defaultValue=""
                variant="standard"
                onChange={(e) => handleChange(e, idx)}
                value={ele["company_name"]}
              />

              {/* start mon and year */}
              <div className="d-block">
                <FormControl
                  error={checkYearMonthValid(
                    ele["start_year"],
                    ele["start_month"],
                    ele["end_year"],
                    ele["end_month"],
                    ele["is_present"]
                  )}
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Start Month
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ele["start_month"]}
                    label="Start Month"
                    onChange={(e) => handleChange(e, idx)}
                    name="start_month"
                  >
                    {month.map((ele, idx) => (
                      <MenuItem value={ele}>{ele}</MenuItem>
                    ))}
                    {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                  <FormHelperText>Invalid Job Period</FormHelperText>
                </FormControl>
                <FormControl
                  error={checkYearMonthValid(
                    ele["start_year"],
                    ele["start_month"],
                    ele["end_year"],
                    ele["end_month"],
                    ele["is_present"]
                  )}
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Start Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ele["start_year"]}
                    label="Start Year"
                    onChange={(e) => handleChange(e, idx)}
                    name="start_year"

                    // onChange={handleChange}
                  >
                    {year.map((ele, idx) => (
                      <MenuItem value={ele}>{ele}</MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Invalid Job Period</FormHelperText>
                </FormControl>
              </div>

              {/* end mon and year */}

              <div className="d-block">
                <FormControl
                  error={checkYearMonthValid(
                    ele["start_year"],
                    ele["start_month"],
                    ele["end_year"],
                    ele["end_month"],
                    ele["is_present"]
                  )}
                  disabled={ele["is_present"]}
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    End Month
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ele["end_month"]}
                    label="End Month"
                    onChange={(e) => handleChange(e, idx)}
                    name="end_month"

                    // onChange={handleChange}
                  >
                    {month.map((ele, idx) => (
                      <MenuItem value={ele}>{ele}</MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Invalid Job Period</FormHelperText>
                </FormControl>

                <FormControl
                  error={checkYearMonthValid(
                    ele["start_year"],
                    ele["start_month"],
                    ele["end_year"],
                    ele["end_month"],
                    ele["is_present"]
                  )}
                  disabled={ele["is_present"]}
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    End Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ele["end_year"]}
                    label="End Year"
                    onChange={(e) => handleChange(e, idx)}
                    name="end_year"
                    // onChange={handleChange}
                  >
                    {year.map((ele, idx) => (
                      <MenuItem value={ele}>{ele}</MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Invalid Job Period</FormHelperText>
                </FormControl>

                <FormGroup>
                  <FormControlLabel
                    // checked={ele["is_present"]}
                    onChange={(e) => handleChange(e, idx)}
                    // defaultChecked={false}
                    name="is_present"
                    control={<Checkbox />}
                    label="Present"
                    required
                  />
                </FormGroup>
              </div>

              <div></div>

              <div className="d-block">
                <TextField
                  style={{ width: "100%" }}
                  id="Job Despcription"
                  name="job_des"
                  label="Job Despcription"
                  multiline
                  rows={5}
                  defaultValue=""
                  variant="filled"
                  onChange={(e) => handleChange(e, idx)}
                  value={ele["job_des"]}
                />
              </div>
            </div>
          </Box>
        );
      })}
    </Box>
  );
};

const StepThreeForm = ({
  data,
  addNewEducation,
  handleChange,
  handleDelete,
}) => {
  const month = [];
  for (let i = 1; i <= 12; i++) {
    month.push(i);
  }
  const year = [];
  for (let i = 2023; i >= 1950; i--) {
    year.push(i);
  }

  return (
    <Box style={{ minHeight: "300px", minWidth: "500px" }}>
      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        onClick={addNewEducation}
      >
        <AddIcon />
        Add
      </Fab>

      {data.map((ele, idx) => {
        return (
          <Box key={idx} className="mt-3">
            <div>
              {/* <p
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bolder",
                }}
              >
                Job {idx + 1}
              </p> */}
              <Divider className="my-2">
                <Chip
                  color={
                    idx === 0 ? "error" : idx === 1 ? "warning" : "success"
                  }
                  label={
                    idx === 0
                      ? "Highest Education"
                      : idx === 1
                      ? "Second Higher"
                      : "Third Higher"
                  }
                  onDelete={(e) => handleDelete(idx)}
                  deleteIcon={<DeleteIcon fontSize="large" id={idx} />}
                  variant="filled"
                  // onClick={(e, idx) => handleDelete(e, idx)}
                />
              </Divider>

              <TextField
                id="school_name"
                name="school_name"
                label="School Name"
                defaultValue=""
                variant="standard"
                onChange={(e) => handleChange(e, idx)}
                value={ele["school_name"]}
              />

              <TextField
                id="school_major"
                name="school_major"
                label="Major Subject"
                defaultValue=""
                variant="standard"
                onChange={(e) => handleChange(e, idx)}
                value={ele["school_major"]}
              />
              <TextField
                id="school_location"
                name="school_location"
                label="School_Location"
                defaultValue=""
                variant="standard"
                onChange={(e) => handleChange(e, idx)}
                value={ele["school_location"]}
              />

              {/* start mon and year */}
              <div className="d-block">
                <FormControl
                  error={checkYearMonthValid(
                    ele["start_year"],
                    ele["start_month"],
                    ele["end_year"],
                    ele["end_month"],
                    ele["is_present"]
                  )}
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Start Month
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ele["start_month"]}
                    label="Start Month"
                    onChange={(e) => handleChange(e, idx)}
                    name="start_month"
                  >
                    {month.map((ele, idx) => (
                      <MenuItem value={ele}>{ele}</MenuItem>
                    ))}
                    {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                  <FormHelperText>Invalid Period</FormHelperText>
                </FormControl>
                <FormControl
                  error={checkYearMonthValid(
                    ele["start_year"],
                    ele["start_month"],
                    ele["end_year"],
                    ele["end_month"],
                    ele["is_present"]
                  )}
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Start Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ele["start_year"]}
                    label="Start Year"
                    onChange={(e) => handleChange(e, idx)}
                    name="start_year"

                    // onChange={handleChange}
                  >
                    {year.map((ele, idx) => (
                      <MenuItem value={ele}>{ele}</MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Invalid Period</FormHelperText>
                </FormControl>
              </div>

              {/* end mon and year */}

              <div className="d-block">
                <FormControl
                  error={checkYearMonthValid(
                    ele["start_year"],
                    ele["start_month"],
                    ele["end_year"],
                    ele["end_month"],
                    ele["is_present"]
                  )}
                  disabled={ele["is_present"]}
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    End Month
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ele["end_month"]}
                    label="End Month"
                    onChange={(e) => handleChange(e, idx)}
                    name="end_month"

                    // onChange={handleChange}
                  >
                    {month.map((ele, idx) => (
                      <MenuItem value={ele}>{ele}</MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Invalid Period</FormHelperText>
                </FormControl>

                <FormControl
                  error={checkYearMonthValid(
                    ele["start_year"],
                    ele["start_month"],
                    ele["end_year"],
                    ele["end_month"],
                    ele["is_present"]
                  )}
                  disabled={ele["is_present"]}
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    End Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ele["end_year"]}
                    label="End Year"
                    onChange={(e) => handleChange(e, idx)}
                    name="end_year"
                    // onChange={handleChange}
                  >
                    {year.map((ele, idx) => (
                      <MenuItem value={ele}>{ele}</MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Invalid Period</FormHelperText>
                </FormControl>

                <FormGroup>
                  <FormControlLabel
                    // checked={ele["is_present"]}
                    onChange={(e) => handleChange(e, idx)}
                    // defaultChecked={false}
                    name="is_present"
                    control={<Checkbox />}
                    label="Present"
                    required
                  />
                </FormGroup>
              </div>

              <div></div>

              <div className="d-block">
                <TextField
                  style={{ width: "100%" }}
                  id="School Despcription"
                  name="school_des"
                  label="School Despcription"
                  multiline
                  rows={5}
                  defaultValue=""
                  variant="filled"
                  onChange={(e) => handleChange(e, idx)}
                  value={ele["school_des"]}
                />
              </div>
            </div>
          </Box>
        );
      })}
    </Box>
  );
};

const StepFourForm = ({
  data,
  addNewCertificate,
  handleChange,
  handleDelete,
}) => {
  const month = [];
  for (let i = 1; i <= 12; i++) {
    month.push(i);
  }
  const year = [];
  for (let i = 2023; i >= 1950; i--) {
    year.push(i);
  }

  return (
    <Box style={{ minHeight: "300px", minWidth: "500px" }}>
      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        onClick={addNewCertificate}
      >
        <AddIcon />
        Add
      </Fab>

      {data.map((ele, idx) => {
        return (
          <Box key={idx} className="mt-3">
            <div>
              {/* <p
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bolder",
                }}
              >
                Job {idx + 1}
              </p> */}
              <Divider className="my-2">
                <Chip
                  label={`Certificate ${idx + 1}`}
                  onDelete={(e) => handleDelete(idx)}
                  deleteIcon={<DeleteIcon fontSize="large" id={idx} />}
                  variant="filled"
                  // onClick={(e, idx) => handleDelete(e, idx)}
                />
              </Divider>

              <TextField
                id="cert_name"
                name="cert_name"
                label="Certificate Name"
                defaultValue=""
                variant="standard"
                onChange={(e) => handleChange(e, idx)}
                value={ele["cert_name"]}
              />
              <TextField
                id="cert_org"
                name="cert_org"
                label="Certificate Org"
                defaultValue=""
                variant="standard"
                onChange={(e) => handleChange(e, idx)}
                value={ele["cert_org"]}
              />

              {/* start mon and year */}
              <div className="d-block">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Qualified Month
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ele["cert_month"]}
                    label="Qualified Month"
                    onChange={(e) => handleChange(e, idx)}
                    name="cert_month"
                  >
                    {month.map((ele, idx) => (
                      <MenuItem value={ele}>{ele}</MenuItem>
                    ))}
                    {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Qualifed Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ele["cert_year"]}
                    label="Qualifed Year"
                    onChange={(e) => handleChange(e, idx)}
                    name="cert_year"

                    // onChange={handleChange}
                  >
                    {year.map((ele, idx) => (
                      <MenuItem value={ele}>{ele}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </Box>
        );
      })}
    </Box>
  );
};

class CreateResume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: this.props.activeStep,
      skipped: new Set(),
      formData: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeExp = this.handleChangeExp.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChangeEdu = this.handleChangeEdu.bind(this);
    this.handleDeleteEdu = this.handleDeleteEdu.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleChangeCert = this.handleChangeCert.bind(this);
    this.handleDeleteCert = this.handleDeleteCert.bind(this);
  }

  isStepOptional(step) {
    return step === 3;
  }

  isStepSkipped(step) {
    const { skipped } = this.state;
    return skipped.has(step);
  }

  handleChange(e) {
    console.log("name: ", e.target.name);
    const valueType = e.target.name;
    console.log("val: ", e.target.value);
    this.props.setModalData({
      ...this.props.modalData,
      [valueType]: e.target.value,
    });
  }

  handleDeleteEdu(idx) {
    let currExp = this.props.modalData.education;
    currExp.splice(idx, 1);

    this.props.setModalData({
      ...this.props.modalData,
      education: currExp,
    });
  }

  handleFileUpload(e) {
    const file = e.target.files[0];

    console.log(file);

    this.props.setPostedImage(file);

    const formData = new FormData();
    formData.append("image", file);

    // for (var [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    const reader = new FileReader();

    reader.onload = () => {
      this.props.setUploadedImage(reader.result);

      console.log(reader.result);
    };

    reader.readAsDataURL(file);
  }

  handleChangeEdu(e, idx) {
    let type = e.target.name;

    let value;
    if (type === "is_present") {
      console.log("is_present", e.target.checked);
      value = e.target.checked;
    } else {
      value = e.target.value;
    }
    let prevExp = this.props.modalData.education;

    prevExp[idx][type] = value;

    if (type === "is_present") {
      prevExp[idx]["end_year"] = "";
      prevExp[idx]["end_month"] = "";
    }
    // console.log(e, idx);

    this.props.setModalData({
      ...this.props.modalData,
      education: prevExp,
    });
  }

  handleChangeExp(e, idx) {
    let type = e.target.name;

    let value;
    if (type === "is_present") {
      console.log("is_present", e.target.checked);
      value = e.target.checked;
    } else {
      value = e.target.value;
    }
    let prevExp = this.props.modalData.experience;

    prevExp[idx][type] = value;

    if (type === "is_present") {
      prevExp[idx]["end_year"] = "";
      prevExp[idx]["end_month"] = "";
    }
    // console.log(e, idx);

    this.props.setModalData({
      ...this.props.modalData,
      experience: prevExp,
    });
  }

  handleChangeCert(e, idx) {
    let type = e.target.name;

    let value = e.target.value;
    let prevCert = this.props.modalData.certificate;

    prevCert[idx][type] = value;

    // console.log(e, idx);

    this.props.setModalData({
      ...this.props.modalData,
      certificate: prevCert,
    });
  }

  handleDelete(idx) {
    let currExp = this.props.modalData.experience;
    currExp.splice(idx, 1);

    this.props.setModalData({
      ...this.props.modalData,
      experience: currExp,
    });
  }

  handleDeleteCert(idx) {
    let currCert = this.props.modalData.certificate;
    currCert.splice(idx, 1);

    this.props.setModalData({
      ...this.props.modalData,
      certificate: currCert,
    });
  }

  handleNext = () => {
    const { activeStep, skipped } = this.state;
    let newSkipped = skipped;
    if (this.isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1,
      skipped: newSkipped,
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState((prevState) => {
      const newSkipped = new Set(prevState.skipped.values());
      newSkipped.add(activeStep);
      return {
        activeStep: prevState.activeStep + 1,
        skipped: newSkipped,
      };
    });
  };

  handleReset = () => {
    this.setState({ activeStep: 0 });
  };

  render() {
    console.log("is edit: ", this.props.isEdit);

    const { activeStep } = this.state;

    const preview = ["education", "experience", "certificate"];
    console.log("ac: ", activeStep);
    return (
      <Dialog
        fullWidth
        maxWidth={activeStep === steps.length ? "lg" : "sm"}
        open={this.props.showCreateModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            px: 5,
            height: "80vh",
          }}
          noValidate
          autoComplete="off"
        >
          <DialogTitle sx={{ textAlign: "center" }}>
            Create Resume
            <IconButton
              onClick={this.props.handleCloseCreateModal}
              aria-label="edit"
              color="primary"
              style={{ position: "absolute", right: 0, top: 0 }}
            >
              <CancelIcon fontSize="large" />
            </IconButton>
          </DialogTitle>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (this.isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (this.isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography style={{ textAlign: "center" }} sx={{ mt: 2, mb: 1 }}>
                Your Resume
              </Typography>
              {/* preview */}
              <ResumePreviewInfo
                uploadedImage={this.props.uploadedImage}
                modalData={this.props.modalData}
              />
              {preview.map((ele) => (
                <Box sx={{ mb: 5 }}>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: "1rem" }}>
                    {ele}
                  </p>
                  <ResumePreviewTable
                    keys={this.props.keyData[ele]}
                    header={this.props.headerData[ele]}
                    data={this.props.modalData[ele]}
                  />
                </Box>
              ))}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box
                  sx={{ flex: "1 1 auto", justifyContent: "space-between" }}
                />

                <Box>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                </Box>
                <Button onClick={this.handleReset}>Reset</Button>
                <Button
                  onClick={() =>
                    this.props.isEdit
                      ? this.props.handleUpdateResume()
                      : this.props.handleSendResume()
                  }
                >
                  {this.props.isEdit ? "Update" : "Create"} Resume
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                {/* Step {activeStep + 1} */}
                {activeStep === 0 ? (
                  <StepOneForm
                    handleChange={this.handleChange}
                    modalData={this.props.modalData}
                    handleFileUpload={this.handleFileUpload}
                    uploadedImage={this.props.uploadedImage}
                  />
                ) : activeStep === 1 ? (
                  <StepTwoForm
                    handleChange={this.handleChangeExp}
                    data={this.props.modalData.experience}
                    addNewExperience={this.props.addNewExperience}
                    handleDelete={this.handleDelete}
                  />
                ) : activeStep === 2 ? (
                  <StepThreeForm
                    data={this.props.modalData.education}
                    addNewEducation={this.props.addNewEducation}
                    handleChange={this.handleChangeEdu}
                    handleDelete={this.handleDeleteEdu}
                  />
                ) : (
                  <StepFourForm
                    data={this.props.modalData.certificate}
                    addNewCertificate={this.props.addNewCertificate}
                    handleChange={this.handleChangeCert}
                    handleDelete={this.handleDeleteCert}
                  />
                )}
                {/* the form should be here... */}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {this.isStepOptional(activeStep) && (
                  <Button
                    color="inherit"
                    onClick={this.handleSkip}
                    sx={{ mr: 1 }}
                  >
                    Skip
                  </Button>
                )}

                <Button onClick={this.handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Dialog>
    );
  }
}

export default CreateResume;
