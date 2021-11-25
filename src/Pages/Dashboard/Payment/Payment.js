import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutFrom from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jvv5jCBSalzSOW5z9PmrJIk0DPDBDCRMRyClmQjCXEbcvAG6mKH35N0b7Ud5YmyRcSjDwn6AJZi0RxTIHCSeCn900dAd0cgX1"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(
      `https://mighty-river-35685.herokuapp.com/appointments/${appointmentId}`
    )
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please Pay for: {appointment.patientName} for {appointment.serviceName}
      </h2>
      <h4>Pay: ${appointment.price}</h4>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutFrom appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
