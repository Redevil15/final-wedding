"use client";

import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    transition: {
      duration: 1,
      ease: easeInOut,
    },
    opacity: [0, 1]
  }
}

const images = {
  flutter: "./palomas.png",
  redux: "./pastel.png",
  sass: "./rings.png"
}

export const Header = () => {
  return (
    <div id="home" className="relative z-9 w-full px-5 md:px-0 md:max-w-screen-lg mx-auto py-10 md:py-20 bg-cover bg-center mt-[75px] h-[700px]">
      <div className="absolute inset-0 w-full h-[680px]">
        <Image
          src="/fabybrandon.webp"
          alt="profile_bg"
          layout="fill"
          className="rounded-lg absolute"
        />
      </div>
      <motion.div
        whileInView={{ x: [-100, -15], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-0.65 flex-col justify-start items-start h-full mt-5 md:mt-0 md:w-full md:mx-0 md:mr-0 md:mb-2"
      >
        <div className="flex justify-end items-end flex-col md:flex-row md:justify-start md:items-start">
          <div className="flex flex-row items-center p-4 bg-white rounded-lg shadow-md">
            <span className="text-4xl md:text-5xl">👰🏻💍🤵🏻</span>
            <div className="ml-4">
              <p className="p-text">Nos casamos!</p>
              <h1 className="head-text">Faby & Brandon</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
