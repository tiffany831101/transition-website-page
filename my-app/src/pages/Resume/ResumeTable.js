import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import moment from "moment";
function createData(name, ResumeLink, CreatedAt) {
  return { name, ResumeLink, CreatedAt };
}

const rows = [createData("My Resume", "http://example.com", "2023-07-13")];

const ResumeTable = ({
  data = [],
  handleEdit,
  handleDelete,
  handleDownload,
}) => {
  console.log(data);
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  };

  const handleCopy = (textToCopy) => {
    copyToClipboard(textToCopy);
  };

  const openNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 3, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="center">Resume Link</TableCell>
              <TableCell align="center">Last Updated</TableCell>

              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {idx + 1}
                </TableCell>
                <></>
                <TableCell align="center">
                  <Tooltip title="copy link">
                    <IconButton
                      aria-label="copy"
                      onClick={() => handleCopy(row.html)}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                  <Fab
                    variant="extended"
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{
                      mx: 1,
                    }}
                    onClick={() => openNewTab(row.html)}
                  >
                    New Tab
                    <Tooltip title="Open in New Tab">
                      <OpenInNewIcon sx={{ ml: 1 }} />
                    </Tooltip>
                  </Fab>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                    onClick={() => handleDownload(row.html)}
                  >
                    PDF
                    <Tooltip title="Download PDF">
                      <DownloadIcon sx={{ ml: 1 }} />
                    </Tooltip>
                  </Fab>
                </TableCell>
                <TableCell align="center">
                  {moment(row.created_at).format("YYYY-MM-DD HH:mm:ss")}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(idx)}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="edit" onClick={() => handleEdit(idx)}>
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ResumeTable;
