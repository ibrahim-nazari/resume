import Language from "./Language";
const Experience = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 my-10 sm:my-16">
      <h2 className="text-gray-700 text-center font-bold title-shadow text-5xl my-10">
        Technology i love to work
      </h2>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 ">
        <div className="flex flex-col">
          <h4 className="text-gray-800 font-bold my-5 text-5xl ">Front-End</h4>
          {["a", "b", "c", "d"].map((item, i) => (
            <Language key={i} />
          ))}
        </div>
        <div className="flex flex-col">
          <h4 className="text-gray-800 font-bold my-5 text-5xl ">Back-End</h4>
          {["a", "b", "c", "d"].map((item, i) => (
            <Language key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
