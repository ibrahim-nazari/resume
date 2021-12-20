import Link from "next/link";
import Image from "next/image";
const Language = ({ item }) => {
  return (
    <div className="flex space-x-10 items-start shadow-md border border-gray-100 p-5 ">
      <div style={{ minWidth: "80px" }}>
        {" "}
        <Image src={item.image} width="80" height="80" objectFit="contain" />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4 items-center ">
          <p className="font-bold text-lg text-gray-700">{item.name}</p>
          <Link target="_blank" href={item.link}>
            <a className="text-blue-600 cursor-pointer">{item.link}</a>
          </Link>
        </div>
        <div className="text-gray-700">{item.shortD}</div>
      </div>
    </div>
  );
};

export default Language;
