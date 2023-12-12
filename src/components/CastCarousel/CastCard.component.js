import React from "react";
import Slider from "react-slick";
import { NextArrow,PrevArrow } from "../Premier/premier.arrow.components";

const CastCard =(props)=>{
   return(
     <>
     <div className="w-full h-150 text-center mt-4">
       <div className="w-120 h-120 pr-4">
        <img className="w-full h-full rounded-full" src={props.src} alt="CastCard Image" />
       </div>
        <h5 className="text-md text-black w-120 py-1"> {props.title} </h5>
        <h5 className="text-sm  text-slate-600 w-120 "> {props.subtitle} </h5>
      </div>
      </>
   );
};

const CastCardSlider=()=>{

 const CastImage=[

  {
    src:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prabhas-1708-1686915417.jpg",
    alt:"prabhas",
    title:"Prabhas",
    subtitle:"as Salaar"
  },
  {
    src:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg",
    alt:"prithviraj",
    title:"Prithviraj Sukumaran",
    subtitle:"Actor"
  },
  {
    src:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shruti-haasan-29670-18-09-2017-05-02-43.jpg",
    alt:"sruthi",
    title:"Sruthi Haasan",
    subtitle:"Actor"
  },
  {
    src:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tinnu-anand-2377-24-03-2017-13-48-47.jpg",
    alt:"tinnu",
    title:"Tinnu Anand",
    subtitle:"Actor"
  },
  {
    src:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/eshwari-rao-iein016490-12-04-2017-12-39-31.jpg",
    alt:"Eshwari",
    title:"Eshwari Roa",
    subtitle:"Actor"
  },
  {
    src:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jagapati-babu-5809-24-03-2017-17-32-31.jpg",
    alt:"jagapati",
    title:"Jagapati Babu",
    subtitle:"as Rajamanaar"
  },
  {
    src:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sriya-reddy-2724-17-10-2018-12-56-21.jpg",
    alt:"sriya",
    title:"Sriya Reddy",
    subtitle:"Actor"
  },
  {
    src:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/garuda-ram-2014573-01-10-2021-01-05-35.jpg",
    alt:"ram",
    title:"Garuda Ram",
    subtitle:"Actor"
  }
]

   const settings={
     infinite:false,
     autoplay:false,
     slidesToShow:6,
     slidesToScroll:5,
     InitailSlide:0,
     prevArrow: <PrevArrow />,
     nextArrow: <NextArrow />
     }
     return(
       <>
       <Slider {...settings} >
        {CastImage.map((image)=>(
           <CastCard {...image} />
        ))}
      </Slider>
      </>
    );
};

export default CastCardSlider;
