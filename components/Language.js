import Link from "next/link";
import Image from "next/image";
const Language = () => {
  return (
    <div className="flex space-x-10 items-start shadow-md border border-gray-100 p-5 ">
      <Image src="/images/webdevelopment.webp" width="80" height="80" />
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4 items-center ">
          <p className="font-bold text-lg text-gray-700">Node.js</p>
          <Link href="https://node.js.org">
            <a className="text-blue-600 cursor-pointer">https://node.js.org</a>
          </Link>
        </div>
        <div className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quaerat
          voluptas perferendis accusantium eaque
        </div>
      </div>
    </div>
  );
};

export default Language;
