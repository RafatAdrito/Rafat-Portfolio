import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex gap-3 lg:flex-row very-sm:flex-col justify-center items-center">
      <div className="flex flex-col justify-center animate-fade-right animate-once animate-duration-1000 animate-ease-in lg:gap-12 very-sm:gap-3">
        <p className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-4xl sm:text-2xl very-sm:text-xl font-bold">
          MD. Rafatuzzaman Khan
        </p>
        <p className="xl:text-3xl very-sm:text-xl">Dept of CSE</p>
        <p className="lg:text-xl">
          Military Institute of Science and Technology
        </p>
      </div>
      <div className="relative w-1/2 2xl:h-[500px] xl:h-[450px] md:h-[350px] sm:h-[300px] very-sm:h-[150px] animate-jump-in animate-once animate-duration-[2000ms] animate-ease-in-out">
        <Image
          src="/work.png"
          alt=""
          fill
          style={{ borderRadius: "50%" }}
        ></Image>
      </div>
    </div>
  );
};

export default Homepage;
