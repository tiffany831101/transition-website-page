import { HashRouter as Router, Route, Link } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MessageIcon from "@mui/icons-material/Message";
import AddCardIcon from "@mui/icons-material/AddCard";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import Switch from "@mui/material/Switch";
import { postNameCard, getCurrentJobByResume } from "../../api";
import { ValidateSignature } from "../../utils";

const label = { inputProps: { "aria-label": "Switch demo" } };

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 600 }}
    >
      {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Business Cards"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
      {/* <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
    </Paper>
  );
}
function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 350 }}>
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Fab
            variant="extended"
            aria-label="add"
            size="small"
            color="primary"
            className="mt-2"
          >
            Contact
          </Fab>
        }
        title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
      /> */}
      {/* <CardMedia
        component="img"
        height="194"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
        alt="Paella dish"
      /> */}

      <CardContent style={{ position: "relative" }}>
        <div
          style={{
            top: 0,
            left: 0,
            position: "absolute",
            width: "100%",
            height: "40%",
            background: "#474747",
          }}
        ></div>
        <div className="d-flex justify-content-around align-items-center flex-wrap">
          <Avatar
            sx={{ width: 100, height: 100 }}
            alt="Remy Sharp"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
          />

          <p
            style={{
              fontSize: 20,
              textAlign: "center",
              marginLeft: 5,
              fontWeight: "bolder",
            }}
          >
            Product Manager @ Adobe
          </p>

          <div className="col-12">
            <p className="mb-0" style={{ textAlign: "center" }}>
              Ann Wang
            </p>
          </div>
        </div>
      </CardContent>
      <Divider />
      <CardActions disableSpacing className="d-flex justify-content-between">
        <div>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon /> */}
          {/* </ExpandMore> */}
          <IconButton aria-label="share">
            <AddCardIcon />
          </IconButton>
        </div>
        <div>
          <IconButton aria-label="share">
            <MessageIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}

const CreateNameCard = ({
  setOpen,
  open,
  checked,
  handleChange,
  setPostedImage,
  setUploadedImage,
  uploadedImage,
  setUploadedObverseImage,
  setPostedObverseImage,
  uploadedObverseImage,
  nameCardName,
  jobTitle,
  handleChangeInfo,
  handleConfirm,
  uploadedSelfImage,
  setUploadedSelfImage,
  setPostedSelfImage,
  company,
}) => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    console.log(file);

    setPostedImage(file);

    const formData = new FormData();
    formData.append("image", file);

    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImage(reader.result);

      console.log(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleFileUploadObverse = (e) => {
    const file = e.target.files[0];

    console.log(file);

    setPostedObverseImage(file);

    const formData = new FormData();
    formData.append("image", file);

    const reader = new FileReader();

    reader.onload = () => {
      setUploadedObverseImage(reader.result);

      console.log(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleFileUploadSelf = (e) => {
    const file = e.target.files[0];

    console.log(file);

    setPostedSelfImage(file);

    const formData = new FormData();
    formData.append("image", file);

    const reader = new FileReader();

    reader.onload = () => {
      setUploadedSelfImage(reader.result);

      console.log(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Create Your Personal Namecard</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          Create your namecard with your latest job by resume
        </DialogContentText>
        {!checked && (
          <div className="d-flex justify-content-center flex-wrap">
            <div className="mb-2 d-flex justify-content-center flex-wrap">
              {uploadedSelfImage === null ? (
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
                    backgroundImage: `url(${uploadedSelfImage})`,
                    backgroundSize: "cover",
                  }}
                />
              )}
              <div className="col-12 d-flex justify-content-center">
                <Button size="small" variant="contained" component="label">
                  Upload Avatar
                  <input type="file" hidden onChange={handleFileUploadSelf} />
                </Button>
              </div>
            </div>

            <TextField
              autoFocus
              margin="dense"
              id="jobTitle"
              label="Job Title"
              type="text"
              fullWidth
              variant="standard"
              value={jobTitle}
              onChange={(e) => handleChangeInfo("jobTitle", e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              value={nameCardName}
              variant="standard"
              onChange={(e) => handleChangeInfo("name", e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="company"
              label="Company"
              type="text"
              fullWidth
              variant="standard"
              value={company}
              onChange={(e) => handleChangeInfo("company", e.target.value)}
            />
          </div>
        )}

        <p>Name Card Proof</p>
        <Box
          style={{
            background: "#dee4ea",
            height: "300px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="col-6 d-flex justify-content-center flex-wrap">
            <Button size="small" variant="contained" component="label">
              Front Side
              <input type="file" hidden onChange={handleFileUpload} />
            </Button>

            <div
              className="mt-1"
              style={{
                width: "100%",
                height: "80%",
                border: "dotted",
                backgroundImage: `url(${uploadedImage})`,
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="col-6 d-flex justify-content-center flex-wrap">
            <Button size="small" variant="contained" component="label">
              Back Side
              <input type="file" hidden onChange={handleFileUploadObverse} />
            </Button>

            <div
              className="mt-1"
              style={{
                width: "100%",
                height: "80%",
                border: "dotted",
                backgroundImage: `url(${uploadedObverseImage})`,
                backgroundSize: "cover",
              }}
            />
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};
const Blog = (props) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [checked, setCheck] = useState(true);

  const [postedImage, setPostedImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedObverseImage, setUploadedObverseImage] = useState(null);
  const [postedObverseImage, setPostedObverseImage] = useState("");
  const [postedSelfImage, setPostedSelfImage] = useState(null);
  const [uploadedSelfImage, setUploadedSelfImage] = useState(null);
  const [company, setCompany] = useState("");

  const [nameCardName, setNameCardName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const [currentJob, setCurrentJob] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    let payload = ValidateSignature(token);
    const uid = payload._id;
    getCurrentJobByResume("110960030434017573896")
      .then((res) => {
        console.log("res: ", res);
        setCurrentJob(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  // resume jobtitle
  // resume company name
  const postUserNameCard = () => {
    // 沒有要使用 resume 但也沒有填寫 job title 跟 name
    const token = localStorage.getItem("token");

    if (!checked && !nameCardName && !jobTitle) return;
    if (!token) return;

    let payload = ValidateSignature(token);
    const id = payload._id;
    postNameCard({
      uid: id,
      jobTitle,
      company,
      nameCardName,
      image: {
        front: uploadedImage,
        back: uploadedObverseImage,
        avatar: uploadedSelfImage,
      },
    })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeInfo = (type, val) => {
    if (type === "jobTitle") {
      setJobTitle(val);
    }

    if (type === "name") {
      setNameCardName(val);
    }

    if (type === "company") {
      setCompany(val);
    }
  };

  const blogContent = [
    {
      title: "小事公益七天挑戰賽 Day 1",
      content:
        "在五週年的時候，Dcard 的特別企劃「無痕飲食」和卡友們一起透過說故事和實際行動發揮了影響力。我們相信，改變世界不僅僅是一個人做了很多事，而是和一群人一起做了很多小事。2018 年 12 月 16 日，我們即將迎接 Dcard 成立七週年！",
      date: "2011 年 12 月 16日",
    },
    {
      title: "每天努力一點點",
      content:
        "從小到大我都不是個善於上台報告的人或許跟我的成長經歷有關係也或許跟我的個性有關係這樣的情況一直沒有改變直到有一天我遇見一位老師他，改變了我",
      date: "2011 年 12 月 16日",
    },
    {
      title: "最大的後盾—陪伴",
      content:
        "我本身就是一名精神疾病患者除了最近診斷出來的憂鬱還有一直以來都有的恐慌症但是在我精神狀態正常的時候知道有許多許多像我一樣水深火熱中的患者或許 他們積極治療想要康復或許 他們正陷入最低潮籌劃著自殺或許 他們痛苦的發作卻沒有人陪伴著雖然我嘴笨 不太會安慰人",
      date: "2011 年 12 月 16日",
    },
  ];

  const actions = [
    { icon: <FileCopyIcon />, name: "Create" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];

  const handleClick = (actionName) => {
    if (actionName === "Create") {
      console.log("modal: ", showCreateModal);
      setShowCreateModal(true);
    }
  };

  const handleConfirm = () => {
    // console.log(123);
    setShowCreateModal(false);
    postUserNameCard();
  };

  return (
    <div className="blog__box pt-5">
      <div className="d-flex justify-content-center col-12">
        <CustomizedInputBase />
      </div>
      <CreateNameCard
        setOpen={setShowCreateModal}
        open={showCreateModal}
        checked={checked}
        handleChange={() => setCheck(!checked)}
        setPostedImage={setPostedImage}
        setUploadedImage={setUploadedImage}
        uploadedImage={uploadedImage}
        uploadedObverseImage={uploadedObverseImage}
        setUploadedObverseImage={setUploadedObverseImage}
        setPostedObverseImage={setPostedObverseImage}
        nameCardName={nameCardName}
        jobTitle={jobTitle}
        handleChangeInfo={handleChangeInfo}
        handleConfirm={handleConfirm}
        uploadedSelfImage={uploadedSelfImage}
        setUploadedSelfImage={setUploadedSelfImage}
        postedSelfImage={postedSelfImage}
        setPostedSelfImage={setPostedSelfImage}
        company={company}
      />
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClick(action.name)}
          />
        ))}
      </SpeedDial>
      {/* make your own namecard */}
      <div className="col-lg-12 col-md-12 col-12 d-flex flex-wrap py-3">
        {/* <Sidebar info={props} /> */}
        {/* <div className="my-3 col-lg-6 col-md-6 col-12 d-flex justify-content-center flex-wrap"> */}
        {/* <div className="blog__banner">
          <img src="" alt="" />
        </div> */}
        {blogContent.map((content, index) => (
          // <div className="mt-3" key={index}>
          //   <h4>{content.title}</h4>
          //   <p>{content.date}</p>
          //   <p>{content.content}</p>
          //   <div className="d-flex likebox pb-3">
          //     <i className="fas fa-heart" style={{ color: "red" }} />
          //     <p className="ml-1">81</p>
          //     <p className="ml-3">回應</p>
          //   </div>
          // </div>
          <div className="col-4" key={index}>
            <RecipeReviewCard />
          </div>
        ))}
        {/* </div> */}
        {/* 這邊測試可否到達單頁頁面ok的，之後單頁頁面要設成/blog/whole/posts/2這樣的路徑 */}
        {/* <Link to="/blog/whole/posts/2">點我</Link> */}
        {/* <Advertise /> */}
      </div>
    </div>
  );
};

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

export default Blog;
