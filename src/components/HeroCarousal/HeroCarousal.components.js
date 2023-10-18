import React from "react";
import HeroSlider from "react-slick";

import { NextArrow,PrevArrow } from "./Arrows.components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroCarousal=()=>{
  const settingslg = {
    arrows:true,
    centerMode:true,
    centerpadding:"300px",
    autoplay:true,
    dots: true,
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
  const images=[
    "https://images.unsplash.com/photo-1682687221073-53ad74c2cad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1695912740580-577d50a525a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1696388790726-68161096266e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ]
  return(
    <>
    <div className="lg:hidden">
    <HeroSlider {...settings} >
    {
      images.map((image)=>(
        <div className="w-full h-64 md:h-80 py-3 ">
         <img src={image} alt="test" className="w-full h-full rounded-md" />
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
         <img src={image} alt="test" className="w-full h-full rounded-md" />
        </div>
      ))
    }
    </HeroSlider>
    </div>
    </>
  );
};
export default HeroCarousal;
