import Image from "next/image";

const Aboutpage = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-32">
      <div className="flex flex-col justify-center gap-12 animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out">
        <p className="text-8xl font-bold">About Me</p>
        <p className="text-xl text-justify">
          Assalamu Alaikum, My name is MD. Rafatuzzaman Khan. I have appeared in
          the final exam of my BSc life and am now pursuing a career in web
          development. I have basic knowledge of object-oriented programming as
          well as data structure and algorithms. In most cases, I love to work
          with object oriented programming-related languages like JavaScript, its
          framework NodeJS, and the related database MongoDB. Also, I have
          in-depth knowledge of documentation tools like Latex and MSWord.
        </p>
      </div>
      <div className="relative w-[2500px] h-[500px] animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out">
        <Image src="/about.png" alt="" fill></Image>
      </div>
    </div>
  );
};

export default Aboutpage;
