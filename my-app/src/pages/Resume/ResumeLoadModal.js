import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LinearWithValueLabel from "./LinearProgress";
import Fab from "@mui/material/Fab";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function GeneratingHtmlModal({
  open,
  handleClose,
  isLoading,
  progress,
  handleDownloadPdf,
  htmlUrl,
}) {
  return (
    <React.Fragment>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle>
          {isLoading ? "Generating Your Personalized Resume" : "Done!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              // m: "auto",
              // width: "fit-content",
            }}
          >
            {/* this is the dialog box */}
            {isLoading ? (
              <LinearWithValueLabel progress={progress} />
            ) : (
              <>
                <LinearWithValueLabel
                  progress={progress}
                  // sx={{ display: "none" }}
                  style={{ visibility: "hidden" }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    // m: "auto",
                    // width: "fit-content",
                  }}
                >
                  <Fab
                    variant="extended"
                    sx={{ mr: 3 }}
                    size="medium"
                    onClick={() => handleDownloadPdf(htmlUrl)}
                  >
                    Download PDF
                    <DownloadIcon sx={{ ml: 1 }} />
                  </Fab>

                  <Fab variant="extended" size="medium" color="primary">
                    View in browser
                    <OpenInNewIcon sx={{ ml: 1 }} />
                  </Fab>
                </Box>
              </>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
