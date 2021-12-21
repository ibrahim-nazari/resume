import Image from "next/image";
import Typed from "react-typed";
const Introduction = () => {
  return (
    <div className="h-[250px] sm:h-[300px] md:h-[500px] relative">
      <div
        className="absolute top-0 left-0 z-20 w-full h-full "
        style={{ backgroundColor: "rgb(17 17 108 / 45%)" }}
      ></div>
      <Image
        src="/images/webdevelopment.webp"
        layout="fill"
        objectFit="cover"
      />
      <div className=" w-full absolute top-1/2 z-30  text-center">
        <h2 className="text-3xl sm:text-6xl text-center  title-shadow font-bold text-gray-100 ">
          I am a web developer
        </h2>

        <Typed
          strings={[
            "Web Developer",
            "Learning Everyday",
            "Coding Everyday",
            "Challenging",
          ]}
          className="  text-center"
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            className="sm:text-3xl font-semibold text-2xl p-4 sm:p-8 border-0 outline-none bg-transparent text-white placeholder-white"
            type="text"
          />
        </Typed>
      </div>
    </div>
  );
};

export default Introduction;
