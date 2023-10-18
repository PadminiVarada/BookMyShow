import React from "react";

const Poster=(props)=>{
  return(
    <>
    <div className="flex flex-col gap-2 px-3 items-start">
      <div className="h-80">
        <img src={props.src} alt={props.title} className="w-full h-full rounded-xl" />
      </div>
      <h3 className={`text-lg font-bold ${
        props.isDark ? "text-white": "text-grey-700"
      }`}>{props.title}
      </h3>
      <p className={`text-sm  text-black ${
        props.isDark ? "text-white": "text-grey-700"
      }`}>{props.subtitle}
      </p>
    </div>
    </>
  );
};

export default Poster;
