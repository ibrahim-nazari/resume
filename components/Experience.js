import Link from "next/link";
import Image from "next/image";
import Project from "./Project";
import { ProjectData } from "../constant/ProjectData";
const Experience = () => {
  return (
    <div data-aos="fade-up" className="max-w-screen-xl mx-auto sm:p-5 my-20">
      <h2 className="text-gray-700 text-center font-bold title-shadow text-3xl md:text-5xl mb-20">
        Recent Work i have done
      </h2>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
        {ProjectData.map((item, i) => (
          <Project item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
