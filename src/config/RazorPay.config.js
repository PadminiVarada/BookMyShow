import React from "react";

const LaunchRazorPay = () => {
  let options = {
    key: "rzp_test_vczayvi0tEI6x8",
    amount: 500*100,
    currency: "INR",
    name:"BookMyShow Clone",
    description:"Movie purchase on Rental",
    image:"https://logodix.com/logo/2011047.jpg",
    handler : () => {
      alert ("payment done")
    },
    theme: {color : "#c4242d"}
  };
  let rzp = new window.Razorpay(options);
  rzp.open();
};

export default LaunchRazorPay;
