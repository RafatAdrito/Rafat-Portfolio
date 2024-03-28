import Image from "next/image";

const skills = ["/c++.png","/html.png","/css.png","/js.png","/python.png","/react.png","/nodejs.png", "/mongodb.png"];

const Skillspage = () => {
  return (
    <div className="flex flex-col items-center h-full gap-12">
      <div className="mt-3">
        <p className="text-6xl animate-fade-down">My Skills</p>
      </div>
      <div className="grid grid-cols-5 gap-x-48 gap-y-12">
        {/* <Image src="/c++.png" alt="" width={100} height={100}></Image>
        <Image src="/html.png" alt="" width={100} height={100}></Image>
        <Image src="/css.png" alt="" width={100} height={100}></Image>
        <Image src="/js.png" alt="" width={100} height={100}></Image>
        <Image src="/python.png" alt="" width={100} height={100}></Image>
        <Image src="/react.png" alt="" width={100} height={100}></Image>
        <Image src="/nodejs.png" alt="" width={100} height={100}></Image>
        <Image src="/mongodb.png" alt="" width={100} height={100}></Image> */}
        {skills.map((skill) => (
          <Image
            src={skill}
            key={skill}
            alt=""
            width={100}
            height={100}
            className="animate-rotate-y animate-once animate-duration-[2000ms] animate-ease-in-out"
          ></Image>
        ))}
      </div>
    </div>
  );
};

export default Skillspage;
