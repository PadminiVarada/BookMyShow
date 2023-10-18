import React from "react";
import { BiChevronRight,BiChevronDown } from "react-icons/bi";
import { BiSearch,BiMenu } from "react-icons/bi";

const NavSm=()=>{
 return(
   <>
   <div className="text-white flex items-center justify-between">
    <div>
    <h3 className="text-xl font-bold"> It all starts here </h3>
    <span className="text-grey-400 text-xs flex items-center">Nellore <BiChevronRight/></span>
    </div>
    <div className="w-6 h-6">
      <BiChevronRight className="w-full h-full" />
    </div>
    </div>
    </>
 );
}
const NavMd=()=>{
  return(
    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
    <BiSearch className="text-grey-300"/>
    <input type="search" className="w-full focus:outline-none" placeholder="search for movies,events,sports,plays,and activities" />
    </div>
  )

}
const NavLg=()=>{
  return(
    <>
  <div class="container mx-auto px-10 flex items-center justify-between">
    <div className="flex items-center w-1/2">
      <div className="w-12 h-12 px-2 py-2">
        <img src="https://o.remove.bg/downloads/a39047e8-866c-4054-a3e6-15db35d6c898/sample-removebg-preview.png" alt="logo" className="w-full h-full" />
      </div>
      <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
        <BiSearch className="text-grey-300" />
        <input type="search" className="w-full focus:outline-none" placeholder="search for movies,events,sports,plays,and activities" />
      </div>
    </div>


    <div className="flex items-center gap-3">
      <span className="text-grey-400 text-xs flex items-center text-stone-300 hover:text-white cursor-pointer">
        Nellore
        <BiChevronDown className="text-white" />
      </span>
      <button className="bg-red-500 text-white rounded px-2 py-1">Sign in </button>
      <div className="w-6 h-6 text-white" >
        <BiMenu className="w-full h-full" />
      </div>
    </div>
  </div>
</>
);
}

const Navbar=()=>{
  return(
    <>
    <nav className="bg-navCol-700 px-4 py-2">

     <div className="md:hidden">
     <NavSm />
     </div>

    <div className="hidden md:flex lg:hidden">
     <NavMd />
     </div>

    <div className="hidden lg:flex">
     <NavLg />
     </div>

    </nav>
    </>
  );

}

export default Navbar;
