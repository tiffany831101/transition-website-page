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

function createData(name, ResumeLink, CreatedAt) {
  return { name, ResumeLink, CreatedAt };
}

// const rows = [createData("My Resume", "http://example.com", "2023-07-13")];

const ResumePreviewTable = ({ data, header, keys }) => {
  console.log("data", data);
  console.log("header: ", header);
  console.log("keys: ", keys);
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
        <Table sx={{ minWidth: 300 }} aria-label="simple table" size="small">
          <TableHead style={{ background: "#1976d2" }}>
            <TableRow>
              {/* <TableCell>Resume Name</TableCell>
              <TableCell align="center">Resume Link</TableCell>
              <TableCell align="center">Created At</TableCell>
              <TableCell align="center">Action</TableCell> */}

              {header.map((ele, idx) =>
                idx === 0 ? (
                  <TableCell style={{ maxWidth: 200, color: "#fff" }}>
                    {ele}
                  </TableCell>
                ) : (
                  <TableCell
                    style={{ maxWidth: 200, color: "#fff" }}
                    align="center"
                  >
                    {ele}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {keys.map((k, idx) => {
                  let startTime = `${row["start_year"]}-${row["start_month"]}`;

                  let endTime = row["is_present"]
                    ? "present"
                    : `${row["end_year"]}-${row["end_month"]}`;

                  if (idx === 0) {
                    return (
                      <TableCell
                        style={{ maxWidth: 200 }}
                        component="th"
                        scope="row"
                      >
                        {row[k] === "" ? "-" : row[k]}
                      </TableCell>
                    );
                  } else {
                    if (k === "start") {
                      return (
                        <TableCell style={{ maxWidth: 200 }} align="center">
                          {startTime}
                        </TableCell>
                      );
                    } else if (k === "end") {
                      return (
                        <TableCell style={{ maxWidth: 200 }} align="center">
                          {endTime}
                        </TableCell>
                      );
                    } else if (k === "job_des" || k === "school_des") {
                      return (
                        <Tooltip placement="top" title={`${row[k]}`}>
                          <TableCell
                            style={{
                              maxWidth: 200,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                            align="center"
                          >
                            {row[k] === "" ? "-" : row[k]}
                          </TableCell>
                        </Tooltip>
                      );
                    } else {
                      return (
                        <TableCell style={{ maxWidth: 200 }} align="center">
                          {row[k] === "" ? "-" : row[k]}
                        </TableCell>
                      );
                    }
                  }
                })}
                {/* <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.ResumeLink}</TableCell>
                <TableCell align="center">{row.CreatedAt}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ResumePreviewTable;
