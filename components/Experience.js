import Link from "next/link";
import Image from "next/image";
import Project from "./Project";
import { ProjectData } from "../constant/ProjectData";
const Experience = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 my-10 sm:my-16">
      <h2 className="text-gray-700 text-center font-bold title-shadow text-5xl my-10">
        Recent Work i have done
      </h2>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {ProjectData.map((item, i) => (
          <Project item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
