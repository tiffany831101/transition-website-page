import { HashRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from "./blogSidebar";
import Advertise from "./blogAdvertise";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageIcon from "@mui/icons-material/Message";

const MediaCard = () => {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ mb: 3, minHeight: "40vh" }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      <Box sx={{ display: "flex" }}>
        <CardContent
          sx={{ minHeight: "30vh" }}
          className="col-2 flex-wrap d-flex"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
            }}
          >
            <IconButton aria-label="delete">
              <KeyboardArrowUpIcon fontSize="large" />
            </IconButton>
            <p style={{ textAlign: "center", margin: 0 }}>55</p>
            <IconButton aria-label="delete">
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
          </Box>
        </CardContent>
        {/* https://dribbble.com/shots/10865779-Forume-Home-Page-Design/attachments/2521647?mode=media */}
        <CardContent sx={{ pr: 10, minHeight: "30vh" }}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <Divider />
      </Box>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <MessageIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
const Blog = (props) => {
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

  return (
    <div className="red col-lg-12 col-md-12 col-12 d-flex justify-content-center flex-wrap py-3 blog__box">
      {/* <Sidebar info={props} /> */}
      <div className="mt-3 col-lg-6 col-md-6 col-12">
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
          <MediaCard />
        ))}
      </div>
      {/* 這邊測試可否到達單頁頁面ok的，之後單頁頁面要設成/blog/whole/posts/2這樣的路徑 */}
      {/* <Link to="/blog/whole/posts/2">點我</Link> */}
      {/* <Advertise /> */}
    </div>
  );
};

export default Blog;
