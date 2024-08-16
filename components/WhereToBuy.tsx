"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const WhereToBuy = (props: Props) => {
  return (
    <div className="container mx-auto my-36">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-3 p-2 place-items-center">
        {/* form section */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
            }}
            className="text-4xl font-bold text-neutral-900 font-sans">
            Buy our products from anywhere
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
            className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Name"
              className="outline-none px-4 py-2 border-gray-800 border-[1px] focus:border-orange-500 rounded-lg  w-full lg:w-[150px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="outline-none px-4 py-2 border-gray-800 border-[1px] focus:border-orange-500 rounded-lg  w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
            className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Country"
              className="outline-none px-4 py-2 border-gray-800 border-[1px] focus:border-orange-500 rounded-lg  w-full"
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="outline-none px-4 py-2 border-gray-800 border-[1px] focus:border-orange-500 rounded-lg  w-full lg:w-[150px]"
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
            }}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-neutral-800 w-full duration-200">
            Order Now
          </motion.button>
        </div>
        {/* world map */}
        <div className="col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            src="/world-map.png"
            alt="map"
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
