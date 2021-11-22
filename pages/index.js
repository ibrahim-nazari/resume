import Head from "next/head";
import Introduction from "../src/component/introduction";
import Experience from "../src/component/experience";
import Hobby from "../src/component/hobby";
import ContactInfo from "../src/component/contactinfo";
import Skills from "../src/component/skills";
import Typed from "react-typed";
export default function Home() {
  return (
    <div className="flex flex-col ">
      <Head>
        <title>Ibrahim Nazari Web developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {/* introduction */}
        <div
          style={{
            background: "url(/images/webdevelopment.webp)",
            boxShadow: "rgb(147 125 138 / 61%) 0px 0px 0px 2000px inset",
            backgroundSize: "cover",
          }}
          class=" h-screen  flex justify-center items-center"
        >
          <div class=" text-center w-5/6 ">
            <h2 className="text-6xl mb-10">I am a full stack web developer</h2>

            <Typed
              strings={[
                "Web developer",
                "Learning everyday",
                "Coding everyday",
                "Challenging",
              ]}
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
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae adipisci
          quam est, quaerat id atque natus qui possimus, fuga accusamus neque
          sequi, repudiandae labore mollitia tempore in obcaecati. Repellat,
          perspiciatis!
        </div>
        <ContactInfo />
        <Experience />
        <Skills />
        <Hobby />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        I am Ibrahim a full stack web developer
      </footer>
    </div>
  );
}
