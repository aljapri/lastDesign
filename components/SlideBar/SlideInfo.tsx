import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { IoMdBookmark } from "react-icons/io";

type Props = {
  transitionData: any;
  currentSlideData: any;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className=" mb-2 h-1 w-5 rounded-full " />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />

    </>
  );
}

export default SlideInfo;
