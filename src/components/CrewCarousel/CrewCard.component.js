import React from "react";
import Slider from "react-slick";
//import { NextArrow,PrevArrow } from "../Premier/premier.arrow.components";

const CrewCard =(props)=>{
   return(
     <>
     <div className="w-full h-150 mt-4 -ml-28">
       <div className="w-120 h-120 pr-4 ">
        <img className="w-full h-full rounded-full" src={props.src} alt="CastCard Image" />
       </div>
        <h5 className="text-md text-black w-120 text-center py-1"> {props.title} </h5>
        <h5 className="text-sm  text-slate-600 w-120 text-center "> {props.subtitle} </h5>
      </div>
      </>
   );
};

const CrewCardSlider=()=>{

 const CrewImage=[

  {
    src:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prashanth-neel-42374-29-11-2018-10-00-27.jpg",
    alt:"director",
    title:"Prashanth Neel",
    subtitle:"Director,Writer"
  },
  {
    src:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-kiraganduru-iein091085-30-03-2017-12-46-53.jpg",
    alt:"producer",
    title:"Vijay kiraganduru",
    subtitle:"Producer"
  },
  {
    src:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ravi-basrur-1054876-28-11-2017-02-56-34.jpg",
    alt:"ravi",
    title:"Ravi Basrur",
    subtitle:"Musician"
  },
  {
    src:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/bhuvan-gowda-iein018632-24-03-2017-16-58-17.jpg",
    alt:"Bhuvan",
    title:"Bhuvan Gowda",
    subtitle:"Cinematography"
  }
]

   const settings={
     infinite:false,
     autoplay:false,
     slidesToShow:6,
     slidesToScroll:5,
     InitailSlide:0,
    }
     return(
       <>
       <Slider {...settings} >
        {CrewImage.map((image)=>(
           <CrewCard {...image} />
        ))}
      </Slider>
      </>
    );
};

export default CrewCardSlider;
