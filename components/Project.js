import Link from "next/link";
import Image from "next/image";
const Project = () => {
  return (
    <div className="p-5 shadow-md border border-gray-100 rounded-sm">
      <div className="text-center">
        <Image src="/images/webdevelopment.webp" width="350" height="250" />
      </div>
      <div className="flex items-center justify-center space-x-4">
        {" "}
        <h4 className="font-semibold text-gray-700">Flycreative</h4>
        <Link href="https://flycreative.design">
          <a className="text-blue-600 cursor-pointer">
            https://flycreative.design
          </a>
        </Link>
      </div>
      <div className="text-gray-500 italic ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque,
        natus veritatis laudantium alias saepe fuga sed? Culpa assumenda
        obcaecati perspiciatis incidunt provident, sint numquam repellat
        deserunt recusandae porro sapiente!
      </div>
    </div>
  );
};

export default Project;
