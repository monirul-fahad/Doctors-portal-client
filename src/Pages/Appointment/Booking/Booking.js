import { Grid } from "@mui/material";
import React from "react";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { price, name, time, space } = booking;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main", fontWeight: 600 }}
            variant="h5"
            gutterBottom
            components="div"
          >
            {name}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} SPACES AVAILABLE
          </Typography>
          <Typography variant="h6" gutterBottom components="div">
            {time}
          </Typography>

          <Typography variant="caption" display="block" gutterBottom>
            Price {price}
          </Typography>
          <Button
            onClick={handleBookingOpen}
            variant="contained"
            color="primary"
          >
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
