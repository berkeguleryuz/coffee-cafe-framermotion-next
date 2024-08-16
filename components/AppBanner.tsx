"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

const BannerStyle = {
  backgroundImage: `url(/coffee2.png)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const AppBanner = (props: Props) => {
  return (
    <div className="mx-auto container my-14">
      <div
        style={BannerStyle}
        className="sm:min-h-[400px] sm:flex sm:items-center sm:justify-end rounded-xl">
        <div className="">
          <div className="space-y-4 max-w-xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
              }}
              className="text-2xl text-center sm:text-4xl font-semibold drop-shadow-2xl">
              Download the app
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
              }}
            className="text-center sm:px-20 drop-shadow-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
              maxime facere saepe asperiores voluptates aliquid.
            </motion.p>
            {/* images */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="flex justify-center items-center gap-4 ">
              <Link
                href={"#"}
                className="max-w-[150px] sm:max-w-[120px] md:-max-w-[200px]">
                <img src="/app_store.png" />
              </Link>
              <Link
                href={"#"}
                className="max-w-[150px] sm:max-w-[120px] md:-max-w-[200px]">
                <img src="/play_store.png" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
