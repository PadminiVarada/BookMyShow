 import React from "react";
 import { CiCircleChevLeft } from "react-icons/ci";


export const NextArrow=(props)=>{
  return(
    <>
    <div
    className={props.className}
    style={{ ...props.style,
      backgroundColor: "black",
      opacity:"0.5",
      font:"5px",
      width:"30px",
      height:"30px",
      margin:"-15px",
      padding:"5px",
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
      position:"absolute",
      top:"172px",
      left:"-192px"
    }}
    onClick={props.onClick}
    >

    <span className="font-2xl bg-black">
    <CiCircleChevLeft />
    </span>

  </div>




    </>
  );
};
