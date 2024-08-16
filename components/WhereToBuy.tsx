import React from "react";
import { motion } from "framer-motion";

type Props = {};

const WhereToBuy = (props: Props) => {
  return (
    <div className="container mx-auto my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form section */}
        <div className=""></div>
        {/* world map */}
        <div className="col-span-2">
          <motion.img
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
