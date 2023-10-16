import React, { useState, useEffect } from "react";
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
import {
  postResume,
  generatePdf,
  getUserResumes,
  updateResume,
} from "../../api";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import GeneratingHtmlModal from "./ResumeLoadModal";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import { ValidateSignature } from "../../utils";

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
    certificate: [],
  };
  const [modalData, setModalData] = useState(defaultModal);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const [isEdit, setIsEdit] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showGeneratingModal, setShowGeneratingModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [postedImage, setPostedImage] = useState("");
  const [htmlUrl, setHtmlUrl] = useState("");
  const [tableData, setTableData] = useState([]);
  console.log("posted image: ", postedImage);
  const [activeStep, setActiveStep] = useState(0);
  const headerData = {
    certificate: [
      "Certificate Name",
      "Certificate Org",
      "Qualifed Month",
      "Qualifed Year",
    ],
    education: [
      "School Name",
      "Major Subject",
      "Location",
      "School Description",
      "Start",
      "End",
      // "Is Present",
    ],
    experience: [
      "Job Name",
      "Company Name",
      "Job Description",

      "Start",
      "End",

      // "Is Present",
    ],
  };

  const getResumes = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = ValidateSignature(token);
      console.log("payload: ", payload);
      getUserResumes({ uid: payload._id })
        .then((res) => {
          // console.log("resdfsdf: ", res);
          const { resumes } = res.data;
          console.log(resumes);
          setTableData(resumes);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   const payload = ValidateSignature(token);
    //   console.log("payload: ", payload);
    //   getUserResumes({ uid: payload._id })
    //     .then((res) => {
    //       console.log("resdfsdf: ", res);
    //       const { resumes } = res.data;
    //       console.log(resumes);
    //       setTableData(resumes);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }

    getResumes();
  }, []);
  const keyData = {
    certificate: ["cert_name", "cert_org", "cert_month", "cert_year"],
    education: [
      "school_name",
      "school_major",
      "school_location",
      "school_des",
      "start",
      "end",
      // "is_present",
    ],
    experience: ["job_name", "company_name", "job_des", "start", "end"],
  };

  console.log("modal data:", modalData);
  const handleShowCreateModal = () => {
    setIsEdit(false);
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
    setModalData(defaultModal);

    setActiveStep(0);
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
          school_major: "",
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

  const addNewCertificate = () => {
    console.log("add...");
    const certificate = modalData.certificate;

    setModalData({
      ...modalData,
      certificate: [
        ...certificate,
        {
          cert_name: "",
          cert_org: "",
          cert_month: "",
          cert_year: "",
        },
      ],
    });
  };

  const handleCloseGeneratingModal = () => {
    setShowGeneratingModal(false);
  };

  useEffect(() => {
    if (!showGeneratingModal) {
      console.log("generating modal is closed");
      getResumes();
    }
  }, [showGeneratingModal]);
  useEffect(() => {
    setActiveStep(0);
    if (!showCreateModal) {
      setUploadedImage(null);
    }
  }, [showCreateModal]);

  const handleDownloadPdf = (htmlUrl) => {
    // console.log("html: ", htmlUrl);

    generatePdf({ url: htmlUrl })
      .then((res) => {
        const { htmlText } = res.data;
        downloadPdfFromUrl(htmlText, "resume.pdf");
      })
      .catch((err) => {});
  };

  function downloadPdfFromUrl(htmlContent, fileName) {
    const unescapedHtml = unescape(htmlContent);
    const element = document.createElement("div");
    element.innerHTML = unescapedHtml;

    console.log(unescapedHtml);
    html2pdf()
      .set({
        filename: fileName,
        html2canvas: {
          scale: 2,
          letterRendering: true,
          // allowTaint: false,
          useCORS: true,
        },

        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
          compressPDF: true,
        },
      })
      .from(element)
      .save();
  }

  const handleEdit = (idx) => {
    setIsEdit(true);

    console.log("idx: ", tableData[idx]);
    setModalData(tableData[idx]);
    setUploadedImage(tableData[idx]["imageUrl"]);
    setShowCreateModal(true);
    // send the request to edit the resume, do not create a new one, but update
  };

  const handleUpdateResume = () => {
    setShowCreateModal(false);
    setShowGeneratingModal(true);

    setIsLoading(true);

    console.log(modalData);

    setShowCreateModal(false);
    setShowGeneratingModal(true);
    setIsLoading(true);
    const timer = setInterval(() => {
      if (progress < 99) {
        setProgress((prevProgress) =>
          prevProgress + Math.floor(Math.random() * 50) < 90
            ? prevProgress + Math.floor(Math.random() * 50)
            : 95
        );
      }
    }, 1000);

    console.log("sending resume...");

    const formData = new FormData();
    formData.append("image", postedImage);
    formData.append("imageUrl", uploadedImage);
    formData.append("first_name", modalData.first_name);
    formData.append("last_name", modalData.last_name);
    formData.append("country", modalData.country);
    formData.append("city", modalData.city);
    formData.append("job_title", modalData.job_title);
    formData.append("self_intro_short", modalData.self_intro_short);
    formData.append("Facebook", modalData.Facebook);
    formData.append("GitHub", modalData.GitHub);
    formData.append("LinkedIn", modalData.LinkedIn);
    formData.append("Gmail", modalData.Gmail);

    formData.append("experience", JSON.stringify(modalData.experience));

    formData.append("education", JSON.stringify(modalData.education));

    formData.append("certificate", JSON.stringify(modalData.certificate));
    formData.append("resume_id", modalData.resume_id);

    updateResume(formData)
      .then((res) => {
        setIsLoading(false);

        console.log("Resume successfully sent");
        const { data } = res.data;

        const htmlUrl = data.data.htmlUrl;
        setHtmlUrl(htmlUrl);

        setProgress(100); // Set progress to 100 after receiving the API response
        clearInterval(timer); // Clear the timer
      })
      .catch((err) => {
        clearInterval(timer); // Clear the timer

        console.error("Error sending resume:", err);
      });

    console.log("send data", formData);
  };
  const handleDelete = () => {};
  const handleSendResume = () => {
    setShowCreateModal(false);
    setShowGeneratingModal(true);
    setIsLoading(true);
    setProgress(30);

    console.log("sending resume...");

    const formData = new FormData();
    formData.append("image", postedImage);

    formData.append("first_name", modalData.first_name);
    formData.append("last_name", modalData.last_name);
    formData.append("country", modalData.country);
    formData.append("city", modalData.city);
    formData.append("job_title", modalData.job_title);
    formData.append("self_intro_short", modalData.self_intro_short);
    formData.append("Facebook", modalData.Facebook);
    formData.append("GitHub", modalData.GitHub);
    formData.append("LinkedIn", modalData.LinkedIn);
    formData.append("Gmail", modalData.Gmail);

    formData.append("experience", JSON.stringify(modalData.experience));

    formData.append("education", JSON.stringify(modalData.education));

    formData.append("certificate", JSON.stringify(modalData.certificate));

    postResume(formData)
      .then((res) => {
        setProgress(60);

        setIsLoading(false);

        console.log("Resume successfully sent");
        const { data } = res.data;

        const htmlUrl = data.data.htmlUrl;
        setHtmlUrl(htmlUrl);

        setProgress(100); // Set progress to 100 after receiving the API response
      })
      .catch((err) => {
        console.error("Error sending resume:", err);
      });

    console.log("send data", formData);
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
      <ResumeTable
        data={tableData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleDownload={handleDownloadPdf}
      />
      <ResumeModal
        modalData={modalData}
        setModalData={setModalData}
        showCreateModal={showCreateModal}
        handleCloseCreateModal={handleCloseCreateModal}
        addNewExperience={addNewExperience}
        addNewEducation={addNewEducation}
        addNewCertificate={addNewCertificate}
        uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
        handleSendResume={handleSendResume}
        handleUpdateResume={handleUpdateResume}
        headerData={headerData}
        keyData={keyData}
        activeStep={activeStep}
        setPostedImage={setPostedImage}
        isEdit={isEdit}
      />
      <GeneratingHtmlModal
        progress={progress}
        open={showGeneratingModal}
        isLoading={isLoading}
        handleClose={handleCloseGeneratingModal}
        handleDownloadPdf={handleDownloadPdf}
        htmlUrl={htmlUrl}
      />
    </Container>
  );
};

export default Resume;
