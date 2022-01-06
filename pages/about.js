import Layout from "../components/Layout";
import Image from "next/image";
export default function About() {
  return (
    <Layout page="/about">
      <main className="max-w-screen-xl mx-auto p-5 my-10 sm:my-16">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-5xl p-10 mx-auto shadow-md">
          <div className="max-w-[400px]" data-aos="fade-up">
            <h2 className="text-gray-700 my-5 text-2xl font-bold">About Me</h2>
            <div className="text-gray-700">
              I am Ibrahim Nazari, I am a freelance web developer, I have over
              6+ years of Website and Web Application Development. My goal is to
              create Clean, Professional, Seo, and User Friendly Responsive
              Websites and Web Applications for clients.Please feel free to
              contact me with any questions or to get started on your project!
            </div>
          </div>
          <div data-aos="fade-up">
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
