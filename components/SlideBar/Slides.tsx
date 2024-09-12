import React from "react";
import SliderCard from "./SliderCard";

type Props = {
  data: any[];
  handleCardClick:Function;
};

function Slides({ data,handleCardClick }: Props) {

  return (
    <div className=" flex w-full gap-6  absolute sm:left-[50%] ">
      {data.map((data) => {
        return <SliderCard key={data.img} data={data} handleCardClick={handleCardClick}  />;
      })}
    </div>
  );
}

export default Slides;
