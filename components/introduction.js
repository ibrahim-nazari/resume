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
      <div class=" w-full absolute top-1/2 z-30  text-center">
        <h2 className="text-6xl text-center  title-shadow font-bold text-gray-100 ">
          I am a web developer
        </h2>

        <Typed
          strings={[
            "Web developer",
            "Learning everyday",
            "Coding everyday",
            "Challenging",
          ]}
          className="  text-center"
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            className="text-4xl p-8 border-0 outline-none bg-transparent text-white placeholder-white"
            type="text"
          />
        </Typed>
      </div>
    </div>
  );
};

export default Introduction;
