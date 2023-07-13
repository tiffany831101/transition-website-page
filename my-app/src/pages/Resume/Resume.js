import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ResumeTable from "./ResumeTable";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import ResumeModal from "./ResumeModal";

const steps = ["基本資料", "工作經歷", "學歷", "證照"];

const Resume = () => {
  // const [activeStep, setActiveStep] = useState(0);
  // const [skipped, setSkipped] = useState(new Set());
  // const [formData, setFormData] = useState({});

  const defaultModal = {
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    job_title: "",
    self_intro_short: "",
    Facebook: "",
    GitHub: "",
    LinkedIn: "",
    Gmail: "",
    experience: [
      // {
      //   job_name: "",
      //   company_name: "",
      //   start_month: "",
      //   start_year: "",
      //   end_month: "",
      //   end_year: "",
      //   job_des: "",
      // },
    ],
    education: [],
    certificate: [{}],
  };
  const [modalData, setModalData] = useState(defaultModal);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  console.log("modal data:", modalData);
  const handleShowCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };
  const addNewExperience = () => {
    console.log("add...");
    const experience = modalData.experience;

    setModalData({
      ...modalData,
      experience: [
        ...experience,
        {
          job_name: "",
          company_name: "",
          start_month: "",
          start_year: "",
          end_month: "",
          end_year: "",
          job_des: "",
          is_present: false,
        },
      ],
    });
  };

  const addNewEducation = () => {
    console.log("add...");
    const education = modalData.education;

    setModalData({
      ...modalData,
      education: [
        ...education,
        {
          school_name: "",
          school_location: "",
          start_month: "",
          start_year: "",
          end_month: "",
          end_year: "",
          job_des: "",
          is_present: false,
        },
      ],
    });
  };

  return (
    <Container maxWidth="md">
      <Box
        className="d-flex justify-content-between align-items-center"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          my: 3,
          fontWeight: "bold",
        }}
        noValidate
        autoComplete="off"
      >
        <p style={{ marginBottom: 0, fontSize: "1.25rem" }}>
          Created Resume(s)
        </p>
        <div style={{ marginBottom: "10px" }}>
          <Tooltip title="Create New Resume">
            <Fab
              color="primary"
              aria-label="add"
              size="small"
              onClick={handleShowCreateModal}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
      </Box>
      <ResumeTable />
      <ResumeModal
        modalData={modalData}
        setModalData={setModalData}
        showCreateModal={showCreateModal}
        handleCloseCreateModal={handleCloseCreateModal}
        addNewExperience={addNewExperience}
        addNewEducation={addNewEducation}
        uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
      />
    </Container>
  );
};

export default Resume;
