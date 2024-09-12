import React from "react";
import SliderCard from "./SliderCard";

type Props = {
  data: any[];
};

function Slides({ data }: Props) {
  return (
    <div className=" flex w-full gap-6  absolute sm:left-[50%] ">
      {data.map((data) => {
        return <SliderCard key={data.img} data={data} />;
      })}
    </div>
  );
}

export default Slides;
