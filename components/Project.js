import Link from "next/link";
import Image from "next/image";
const Project = ({ item }) => {
  return (
    <div className="pb-5 shadow-md border border-gray-100 rounded-sm">
      <div className="text-center">
        <Image src={item.image} width="350" height="250" objectFit="contain" />
      </div>
      <div className="flex items-center p-4 border-t border-gray-200  space-x-4">
        {" "}
        <h4 className="font-semibold text-gray-700">{item.name}</h4>
        <Link target="_blank" href={item.link}>
          <a className="text-blue-600 cursor-pointer">{item.link}</a>
        </Link>
      </div>
      <div className="text-gray-500  italic p-4 ">{item.shortD}</div>
    </div>
  );
};

export default Project;
