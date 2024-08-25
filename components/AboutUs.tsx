import Image from "next/image";
import { FaBuilding, FaProjectDiagram, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import { SectionWrapper } from "@/hoc";

const AboutSection = () => {
  return (
    <section className=" sm:py-40 relative "     id="aboutUs">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <motion.div
              variants={fadeIn("down", "tween", 0.2, 1)}
              className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex"
            >
              <Image
                className="rounded-xl"
                src="/about.jpg"
                alt="About Us image"
                width={500}
                height={500}
              />
            </motion.div>
            <motion.div variants={fadeIn("down", "tween", 0.6, 1)}>
              <Image
                className="sm:ml-0 ml-auto rounded-xl hidden sm:block"
                src="/about-1.jpg"
                alt="About Us image"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Empowering Each Other to Succeed
                </h2>
                <p>Every project we&apos;ve undertaken has been a collaborative effort, where every person involved has left their mark. Together, we&apos;ve not only constructed buildings but also built enduring connections that define our success story.</p>

              </div>

              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex space-x-5">
                {aboutUsInformation.map(({ number, title, Icon }, index) => {
                  return (
                    <AboutSectionMenu
                      key={index} // Added key prop here
                      index={index}
                      title={title}
                      number={number}
                      Icon={Icon}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionWrapper(AboutSection, "aboutSection");

const aboutUsInformation = [
  {
    number: "10+",
    title: "Years of Experience",
    Icon: FaBuilding,
  },
  {
    number: "20+",
    title: "Products",
    Icon: FaProjectDiagram,
  },
  {
    number: "52+",
    title: "Clients",
    Icon: FaSmile,
  },
];

const AboutSectionMenu = ({ index, Icon, number, title }: any) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="flex-col justify-start items-start inline-flex"
      key={index}
    >
      <Icon className="text-primary text-4xl mb-2" /> {/* Fixed usage of Image */}
      <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
        {number}
      </h3>
      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
        {title}
      </h6>
    </motion.div>
  );
};
