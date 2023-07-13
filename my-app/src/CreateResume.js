import React, { Component } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const steps = ["基本資料", "工作經歷", "學歷", "證照"];

class CreateResume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      skipped: new Set(),
      formData: {},
    };
  }

  isStepOptional(step) {
    return step === 3;
  }

  isStepSkipped(step) {
    const { skipped } = this.state;
    return skipped.has(step);
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
    const { activeStep } = this.state;

    return (
      <Container maxWidth="md">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div" sx={{ my: 3 }}>
                Create Resume
              </Typography>
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
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={this.handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    {/* Step {activeStep + 1} */}
                    {activeStep === 0 ? (
                      <>
                        <TextField
                          id="outlined-read-only-input"
                          label="Read Only"
                          defaultValue="Hello World"
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </>
                    ) : (
                      <></>
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
            </CardContent>
          </Card>
        </Box>
      </Container>
    );
  }
}

export default CreateResume;
