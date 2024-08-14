import { MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="container">
        <div>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={76}
            height={76}
            className=""
          />
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Nav;
