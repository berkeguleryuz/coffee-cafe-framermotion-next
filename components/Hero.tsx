"use client";
import React from "react";
import background from "../public/bg-slate.png";
import Nav from "./Nav";
import Image from "next/image";

const imageBg = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

type Props = {};

const Hero = (props: Props) => {
  return (
    <main
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background.src})` }}>
      <section className="min-h-[750px] w-full justify-center flex">
        <div className="container px-2">
          {/* N */}
          <Nav />
          {/* H */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content */}
            <div className="text-orange-200 mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14">
                Clodron Coffee
              </h1>
              <div className="relative">
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
              </div>
            </div>
            {/* hero image  */}
            <div className="relative">
              <Image
                src={"/black.png"}
                alt=""
                width={350}
                height={350}
                unoptimized={true}
                className="relative object-contain scale-60 md:scale-100 z-40 drop-shadow-2xl"
                priority
              />
              {/* ring area orange */}
              <div className="h-[180px] w-[180px] absolute top-24 -right-16 border-orange-300 rounded-full z-10 border-[20px]" />

              {/* text */}
              <div className="absolute -top-20 left-[200px] z-[1]">
                <h1 className="text-[140px] scale-150 font-bold text-neutral-900/20 leading-none">
                  Clodron Global
                </h1>
              </div>
            </div>
            {/* third div */}
            <div className=""></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
