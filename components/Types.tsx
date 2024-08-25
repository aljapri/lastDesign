import { title } from "process";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import StarWrapper from "@/hoc/SectionWrapper";
import Image from "next/image";
import Link from "next/link";
function Types() {
  return (
    <div className="container mx-auto py-20" id="products">
      <div className="w-full">
        <div className="flex flex-wrap gap-5 items-end">
          <div className="lg:w-1/2 w-full">
            <div className="max-w-xl mb-10" data-wow-delay="0.1s">
              <h1 className="text-4xl font-bold mb-4">Our Products</h1>
              <p className="text-gray-600">
                Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                diam justo sed rebum vero dolor duo.
              </p>
            </div>
          </div>
        </div>

        <div className="tab-content">
          <div id="tab-1" className="tab-pane active">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-3">
              {products.map((el, index) => {
                return (
                  <motion.div
                    key={el.id}
                    className="wow fadeInUp cursor-pointer"
                    data-wow-delay="0.3s"
                    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                  >
                    <Link href={`/products/#${el.link}`}>
                      <div className="product-item">
                        <div className="relative bg-gray-100 overflow-hidden hover:rotate-3 transition-rotate  whenHover transition-transform ">
                          <Image
                            className="w-full h-[450px] object-cover"
                            src={el.image}
                            alt="Product"
                            width={500}
                            height={500}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 text-4xl flex items-center justify-center text-white  opacity-0 hover:opacity-100 transition-opacity">
                            {el.label}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarWrapper(Types, "types");

const products = [
  {
    id: 1,
    image: "/jam.jpg",
    height: "450px",
    label: "المربيات",
    delay: "0.1s",
    link: "jams",
  },
  {
    id: 2,
    image: "/olive.jpg",
    height: "450px",
    label: "الزينون والمحشيات",
    delay: "0.3s",
    link: "olives",
  },
  {
    id: 3,
    image: "/pickle.jpg",
    height: "450px",
    label: "المخلالات",
    delay: "0.3s",
    link: "pinks",
  },
  {
    id: 4,
    image: "/peans.jpg",
    height: "450px",
    label: "المعلابات",
    delay: "0.3s",
    link: "peans",
  },
];



// {renderSection('مربيات', productsData.jams,"jams")}
// {renderSection('زيتون', productsData.olive,"olives")}
// {renderSection('معلبات', productsData.peanuts,"peans")}
// {renderSection('مخلالات', productsData.pinks,"pinks")}
