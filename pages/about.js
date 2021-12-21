import Layout from "../components/Layout";
import Image from "next/image";
export default function About() {
  return (
    <Layout page="/about">
      <main className="max-w-screen-xl mx-auto p-5 my-10 sm:my-16">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-5xl p-10 mx-auto shadow-md">
          <div className="max-w-[400px]">
            <h2 className="text-gray-700 my-5 text-2xl font-bold">About Me</h2>
            <div className="text-gray-700">
              I am Ibrahim Nazari, my major is web development. Being a computer
              programmer help me to be like student forever, learning everyday
              help me to work on recent technology which i loved in life. I work
              as a freelance web developer, when i get time usually i watch
              tutorial, most recent tech amaze me. I like to help, and share my
              knowledge for people, helping,being profesional,build something
              all this three is my goal. Send me message on social media, love
              to discusss and get to know you
            </div>
          </div>
          <div>
            <Image
              src="/images/ibrahim-nazari-web-developer-from-afghanistan.jpg"
              width="300"
              height="400"
              objectFit="contain"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
