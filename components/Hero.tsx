"use client";
import React, { useState } from "react";
import background from "../public/bg-slate.png";
import Nav from "./Nav";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

type Props = {};

const Hero = (props: Props) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background.src})` }}>
      <section className="relative min-h-[750px] w-full justify-center flex">
        <div className="container px-2">
          {/* N */}
          <Nav sidebar={sidebar} setSidebar={setSidebar} />
          {/* H */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]">
            {/* text content */}
            <div className="text-orange-200 mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.7,
                }}
                className="text-7xl font-bold leading-tight ml-14">
                Clodron Coffee
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="relative">
                <div className="relative z-10 space-y-3">
                  <h2 className="text-2xl">It is a Lifestyle</h2>
                  <h3 className="text-md opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae assumenda laborum voluptatibus repellat facilis
                    accusantium quo eligendi quae voluptas quam ipsum,
                    voluptatem tenetur odio id ratione iusto tempore! Dolorem,
                    maxime iure voluptates doloribus maiores earum quaerat
                    cumque velit veniam architecto.
                  </h3>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* hero image  */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={"/black.png"}
                alt=""
                width={350}
                height={350}
                className="relative object-contain scale-60 md:scale-100 z-40 drop-shadow-2xl"
              />
              {/* ring area orange */}
              <div className="h-[180px] w-[180px] absolute top-24 -right-16 border-orange-300 rounded-full z-10 border-[20px]" />

              {/* text */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="absolute -top-20 left-[200px] z-[1]">
                <h1 className="text-[140px] scale-150 font-bold text-neutral-900/20 leading-none">
                  Clodron Global
                </h1>
              </motion.div>
            </div>
            {/* third div */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.4,
              }}
              className="text-orange-200 mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Clodron Coffee
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-3">
                  <h2 className="text-2xl">Make your day better</h2>
                  <h3 className="text-md opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae assumenda laborum voluptatibus repellat facilis
                    accusantium quo eligendi quae voluptas quam ipsum.
                  </h3>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-[#1A1F24]"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* sidebar menu  */}
        {sidebar && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            className="absolute top-0 right-0 w-[185px] h-full bg-gradient-to-b from-orange-400 to-orange-600 backdrop-blur-sm z-10 text-white">
            <div className="w-full h-full flex justify-center items-center gap-6 flex-col">
              {/* line */}
              <div className="w-[1px] h-[70px] bg-white flex" />
              {/* icons */}
              <div className="flex flex-col gap-3">
                <Link
                  href={"/"}
                  className="inline-block p-2 rounded-full cursor-pointer border-white border">
                  <FaFacebook className="w-6 h-6" />
                </Link>
                <Link
                  href={"/"}
                  className="inline-block p-2 rounded-full cursor-pointer border-white border">
                  <RiTwitterXFill className="w-6 h-6" />
                </Link>
                <Link
                  href={"/"}
                  className="inline-block p-2 rounded-full cursor-pointer border-white border">
                  <FaInstagram className="w-6 h-6" />
                </Link>
              </div>

              <div className="w-[1px] h-[70px] bg-white" />
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
