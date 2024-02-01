"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroPage = () => {
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        className="w-screen h-screen bg-primary z-10 absolute"
      />
      <div className="w-full">
        <div>
          <Image
            src="/hero/image-1.jpg"
            alt=""
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="flex flex-col absolute left-6 sm:left-20 top-1/2 sm:top-1/3 text-secondary">
            <h1 className="text-5xl sm:text-8xl uppercase sm:w-[70vw] font-bold">
              Invista na sua melhor versão
            </h1>
            <div className="uppercase text-xl font-normal mt-4 sm:w-3/5">
              O que está esperando para desbloquear seu verdadeiro potencial?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;