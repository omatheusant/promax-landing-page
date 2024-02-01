import Image from "next/image";
import { MotionDiv } from "@/components/motion/motion-div";

const HeroPage = () => {
  return (
    <>
      <MotionDiv
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
        className="w-screen h-screen bg-primary z-10 absolute flex justify-center items-center text-6xl sm:text-8xl text-secondary font-bold"
      >
        <MotionDiv
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-20"
        >
          PROMAX
        </MotionDiv>
      </MotionDiv>
      <div className="w-full relative">
        <div className="relative w-screen h-[90vh] sm:w-screen sm:h-screen">
          <Image
            src="/hero/image-1.jpg"
            alt=""
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="w-full bg-gradient-to-b from-transparent to-primary h-10 absolute bottom-0" />
        </div>
        <div className="flex flex-col absolute pl-6 sm:left-20 top-1/2 sm:top-1/3 text-secondary">
          <h1 className="text-5xl sm:text-8xl uppercase sm:w-[70vw] font-bold">
            Invista na sua melhor versão
          </h1>
          <div className="uppercase text-xl font-normal mt-4 sm:w-3/5">
            O que está esperando para desbloquear seu verdadeiro potencial?
          </div>
        </div>
        <button className="absolute bottom-14 left-1/2 animate-pulse">CLIQUE AQUI</button>
      </div>
    </>
  );
};

export default HeroPage;
