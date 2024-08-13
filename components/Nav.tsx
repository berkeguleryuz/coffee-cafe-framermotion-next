import Image from "next/image";
import React from "react";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="">
      <div className="">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={76}
          height={76}
          className=""
        />
      </div>
    </div>
  );
};

export default Nav;
