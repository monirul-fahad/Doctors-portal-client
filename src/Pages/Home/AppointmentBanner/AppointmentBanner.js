import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74, 0.8)",
  backgroundBlendMode: " darken, luminosity",
  marginTop: 175,
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: "-115px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ mb: 3 }}
              style={{ color: "#5CE7ED" }}
            >
              Appointment
            </Typography>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Make an Appointment Today
            </Typography>
            <Typography variant="p" style={{ color: "white", fontSize: 20 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              corporis quidem nemo. Quasi, iure cum?
            </Typography>
            <br />
            <Button
              variant="contained"
              sx={{ mt: 3 }}
              style={{ backgroundColor: "#5CE7ED" }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
