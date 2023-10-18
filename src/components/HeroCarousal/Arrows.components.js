import React from "react";

export const NextArrow=(props)=>{
  return(
    <>
    <div
    className={props.className}
    style={{ ...props.style,
      backgroundColor: "#7D7C7C",
      opacity:"0.5",
      width:"50px",
      height:"50px",
      padding:"15px",
      color:"black"
    }}
    onClick={props.onClick}
    />
    </>
  );
};

export const PrevArrow=(props)=>{
  return(
    <>
    <div
    className={props.className}
    style={{ ...props.style,
      backgroundColor:"black",
      opacity:"0.5",
      width:"50px",
      height:"50px",
      padding:"15px",
      color:"black"
    }}
    onClick={props.onClick}
    />
    </>
  );
};
