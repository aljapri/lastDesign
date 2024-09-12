import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import BackgroundImage from "./SlideBar/BackgroundImage";
import Slides from "./SlideBar/Slides";
import SlideInfo from "./SlideBar/SlideInfo";
import Controls from "./SlideBar/Controls";
import Header from "./SlideBar/Header";
import enMessages from '@/messages/en.json';
import arMessages from '@/messages/ar.json';
import { usePathname } from "next/navigation";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function SlideBar() {
  const pathName = usePathname();
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en";
  const messages = currentLanguage === "ar" ? arMessages : enMessages; // Load messages based on language
  const sliderData = messages.slides;
  const initData = sliderData[0];

  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = React.useState<CurrentSlideData>({
    data: initData,
    index: 0,
  });
  console.log(data);

  const handleCardClick = (cardData:any) => {
    setCurrentSlideData({
      data: cardData,
      index: sliderData.findIndex((ele) => ele.img === cardData.img),
    });
    setTransitionData(cardData);
    const newArr = sliderData.filter((ele) => ele.img != cardData.img);
    setData(newArr);
  };

  // useEffect logic (optional, as commented in the original code)

  return (
    <main
      className={`
        ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased bg-slate-950
      `}
      id="home"
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          <Header />
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} handleCardClick={handleCardClick}    />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}
