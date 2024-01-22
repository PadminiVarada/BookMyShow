import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

import { NextArrow,PrevArrow } from "./Arrows.components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroCarousal = () => {

  const [images, setImages] = useState([]);

  useEffect( ()=> {
    const reqNowPlayingMovies = async() => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
      };
  reqNowPlayingMovies();
}, []);
console.log({images});

 const settingslg = {
    arrows:true,
    centerMode:true,
    centerpadding:"300px",
    autoplay:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />
  };

  return(
    <>
    <div className="lg:hidden">
    <HeroSlider {...settings} >
    {
      images.map((image)=>(
        <div className="w-full h-64 md:h-80 py-3 ">
         <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
         alt="test" className="w-full h-full rounded-md" />
        </div>
      ))
    }
    </HeroSlider>
    </div>

    <div className="hidden lg:block">
    <HeroSlider {...settingslg} >
    {
      images.map((image)=>(
        <div className="w-full h-96 px-2 py-3 ">
         <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
         alt="test" className="w-full h-full rounded-md" />
        </div>
      ))
    }
    </HeroSlider>
    </div>
    </>
  );
};
export default HeroCarousal;
