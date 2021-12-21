import { Technology } from "../constant/Technology";
import Language from "./Language";
const Experience = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 my-10 sm:my-16">
      <h2
        data-aos="fade-up"
        className="text-gray-700 text-center font-bold title-shadow text-2xl sm:text-5xl my-10"
      >
        Technology i love to work
      </h2>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 ">
        <div className="flex flex-col">
          <h4
            className="text-gray-800 font-bold my-5  text-2xl sm:text-3xl "
            data-aos="fade-up"
          >
            Front-End
          </h4>
          {Technology.frontend.map((item, i) => (
            <Language item={item} key={i} />
          ))}
        </div>
        <div className="flex flex-col">
          <h4
            className="text-gray-800 font-bold my-5 text-2xl sm:text-3xl "
            data-aos="fade-up"
          >
            Back-End
          </h4>
          {Technology.backend.map((item, i) => (
            <Language item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
