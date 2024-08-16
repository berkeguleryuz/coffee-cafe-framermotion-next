import { MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Nav = ({ sidebar, setSidebar }: any) => {
  return (
    <div className="relative top-0 left-0 w-full pt-10 text-white z-40">
      <div className="container">
        <div className="w-full flex items-center justify-between">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            src={"/logo.png"}
            alt="logo"
            width={76}
            height={76}
            className=""
          />
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
            onClick={() => setSidebar(!sidebar)}>
            <MenuIcon className="w-8 h-8 hover:scale-105 transition-all transform active:translate-y-1" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
