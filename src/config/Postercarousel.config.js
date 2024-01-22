import { NextArrow,PrevArrow } from "../components/Premier/premier.arrow.components";

const settings = {
  infinte:true,
  autoplay:false,
  slidesToShow:6,
  slidesToScroll:2,
  InitailSlide:0,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive:[
    {
      breakpoint:1024,
       settings:{
         slidesToShow:3,
         slidesToScroll:3
       }
    },
    {
      breakpoint:600,
       settings:{
         slidesToShow:2,
         slidesToScroll:2,
       }
    },
    {
      breakpoint:400,
       settings:{
         slidesToShow:1,
         slidesToScroll:1,
       }
    },
  ]
  }

export default settings;
