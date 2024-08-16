"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const servicesData = [
  {
    id: 1,
    image: "/coffee1.png",
    title: "Filter Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut eaque voluptatem dolorum distinctio commodi nemo, fugit tenetur. Similique, perferendis?",
  },
  {
    id: 2,
    image: "/coffee3.png",
    title: "Ice Caramel Latte",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut eaque voluptatem dolorum distinctio commodi nemo, fugit tenetur. Similique, perferendis?",
  },
  {
    id: 3,
    image: "/coffee1.png",
    title: "Ice Americano",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut eaque voluptatem dolorum distinctio commodi nemo, fugit tenetur. Similique, perferendis?",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
      staggerChildren: 0.6,
    },
  },
};

const Services = (props: Props) => {
  return (
    <div className="mx-auto container my-16 space-y-4">
      {/* header section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 10,
          delay: 0.7,
        }}
        className="text-center max-w-lg mx-auto space-y-2">
        <h1 className="text-3xl font-bold text-neutral-900">
          New and <span className="text-orange-500">perfect</span> PRODUCTS.
        </h1>
        <p className="text-sm opacity-70">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad nobis cum
          nostrum, nam enim voluptatum unde iure quos sapiente laborum.
        </p>
      </motion.div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 ">
        {servicesData.map((service) => (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ amount: 0.8 }}
            key={service.id}
            className="text-center p-4 space-y-6">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.9,
              }}
              src={service.image}
              alt={service.title}
              className="!hover:scale-110 transition-all max-w-[200px] mx-auto duration-300 cursor-pointer drop-shadow-2xl shadow-black"
            />
            <motion.div variants={cardVariants} className="space-y-2">
              <h1 className="text-2xl font-bold text-orange-500">
                {service.title}
              </h1>
              <p className="text-sm text-gray-800">{service.subtitle}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
