import React from "react";
import Slider from "react-slick";

import Poster from "../poster/Poster.components";

import PosterSlider from "../Premier/premier.components";


//settings
import settings from "../../config/Postercarousel.config";

//images
import PremierImages from "../../config/TempPoster.config";

const Premier =()=>{

return(
    <>
    <div className="flex flex-col items-start py-4">
      <h3 className="text-white font-bold text-xl">Premier </h3>
      <p className="text-white font-bold text-sm">Brand new every releses every Friday</p>
    </div>
    <Slider {...settings}>
      {PremierImages.map((images)=>(
        <Poster {...images} isDark />
      ))}
    </Slider>
    </>
  );
};
export default Premier;
