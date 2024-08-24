import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import BackgroundImage from "./SlideBar/BackgroundImage";
import Slides from "./SlideBar/Slides";
import SlideInfo from "./SlideBar/SlideInfo";
import Controls from "./SlideBar/Controls";
import Header from "./SlideBar/Header";

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
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });
    // useEffect(()=>{
    //   setTimeout(()=>{
    //     setData((prev) => prev.slice(1));
    //     setCurrentSlideData({
    //       data: transitionData ? transitionData : initData,
    //       index: sliderData.findIndex((ele) => ele.img === data[0].img),
    //     });
    //     setTransitionData(data[0]);
    //     setTimeout(() => {
    //       setData((newData) => [
    //         ...newData,
    //         transitionData ? transitionData : initData,
    //       ]);
    //     }, 500);
    //   },3000)
    // },[data])

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased bg-slate-950 `}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <Header />
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
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

const sliderData =[
  {
    img: "/img1.jpg",
    title: "منتجات طازجة",
    description: "نحن نقدم مجموعة متنوعة من المنتجات الطازجة والعالية الجودة لضمان تلبية احتياجات عائلتك الغذائية.",
    location: "القسم الأول",
  },
  
  {
    img: "/img2.jpg",
    title: "زيتون عالي الجودة",
    description: "نقدم أفضل أنواع الزيتون، سواءً كان زيتون أخضر أو أسود، طازج ومغذٍ ومناسب لجميع استخداماتك.",
    location: "قسم الزيتون",
  },
  {
    img: "/img5.jpg",
    title: "خضروات طازجة",
    description: "تجد لدينا أفضل أنواع الخضروات الطازجة والمغذية، مباشرة من المزارع إلى طاولتك.",
    location: "قسم الخضروات",
  },
  {
    img: "/img3.jpg",
    title: "فواكه طازجة",
    description: "استمتع بأشهى وألذ الفواكه الطازجة المتنوعة لصحة أفضل.",
    location: "قسم الفواكه",
  },
  {
    img: "/img4.jpg",
    title: "منتجات عضوية",
    description: "نوفر لكم خيارات غذائية عضوية صحية تضمن تغذية متكاملة لعائلتك.",
    location: "القسم الرابع",
  }
];
const initData = sliderData[0];
