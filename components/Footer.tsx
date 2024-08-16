"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import Link from "next/link";
import { Map, MapPinCheck, PhoneIcon } from "lucide-react";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-600 pt-12 pb-8 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* details */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold uppercase">Clordon Coffee</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              dolorum tempora illum libero magnam dignissimos maxime ullam enim.
              Nulla unde maxime ducimus quas saepe voluptas officia commodi ad
              sit voluptatum.
            </p>
            <div className="">
              <Link className="flex items-center gap-2 mt-2" href="/">
                <PhoneIcon className="w-4 h-4" />
                +49 176 00000000
              </Link>
              <Link className="flex items-center gap-2 mt-1" href="/">
                <MapPinCheck className="w-5 h-5" />
                Deutschland
              </Link>
            </div>
          </div>
          {/* footer links */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* first area */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Process</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
          </div>
          {/* social links */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Follow us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="hover:scale-110 duration-300" />
              <FaInstagram className="hover:scale-110 duration-300"  />
              <FaTelegram className="hover:scale-110 duration-300"  />
              <FaDiscord className="hover:scale-110 duration-300"  />
            </div>
            <div>
              <Image src="/logo.png" alt="logo" width={100} height={100} className="hover:scale-105 duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
