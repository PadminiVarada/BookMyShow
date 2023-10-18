import React from "react";
import EntertainmentCardSlider from "../components/EntertainmentCarousal/EntertainmentCard.components";
import Premier from "../components/Premier/premier.components";

import PosterSlider from "../components/PosterSlider/PosterSlider.component";

import TempPoster from "../config/TempPoster.config";

const HomePage=()=>
{
  return (
  <>
  <div className="flex flex-col gap-10">
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-grey-800">
      The best of Entertainment
      </h1>
       <EntertainmentCardSlider />
     </div>

    <div className="bg-navCol-200 py-16">
     <div className="container mx-auto px-10">
       <div classname="flex">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
           alt="heading"
           className="w-full h-full" />
        </div>
      <PosterSlider
        images={TempPoster}
        title="Premiers"
        subtitle="Brand new fashion every Friday"
        isDark />
      </div>
    </div>
  </div>

  <div className="container mx-auto px-4">
  <PosterSlider
    images={TempPoster}
    title="Online Streaming Events"
    isDark={false} />
  </div>

  <div className="container mx-auto px-4">
  <PosterSlider
    images={TempPoster}
    title="Outdoor Events"
    isDark={false} />
  </div>
  </>
);
}

export default HomePage;
