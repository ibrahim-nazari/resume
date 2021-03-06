import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../constant/Navigation";
import { SocialMedia } from "../constant/SocialMedai";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Footer = () => {
  return (
    <div className=" bg-gray-600 p-10">
      <div className="max-w-screen-lg space-y-4 space-x-6 mx-auto flex flex-col sm:flex-row justify-between ">
        <div className="max-w-lg sm:w-1/2">
          <h6 className="font-bold text-2xl mb-4 text-white" data-aos="fade-up">
            Freelance Web Developer
          </h6>
          <div className="text-white italic text-sm " data-aos="fade-up">
            I am Ibrahim Nazari, I am a freelance web developer, I have over 6+
            years of Website and Web Application Development. My goal is to
            create Clean, Professional, Seo, and User Friendly Responsive
            Websites and Web Applications for clients.Please feel free to
            contact me with any questions or to get started on your project!
          </div>
        </div>
        <div className="flex flex-col space-y-1" data-aos="fade-up">
          <h6 className="font-bold text-2xl mb-2 text-white">Pages</h6>
          {Navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                className={classNames(
                  item.current
                    ? " text-gray-300"
                    : " hover:text-gray-300 text-white",
                  "px-3 py-2 rounded-md text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        <div className="" data-aos="fade-up">
          <h6 className="italic text-lg mb-8 text-gray-400">
            Connect with us through social media
          </h6>
          <div className="flex space-x-4">
            {SocialMedia.map((social) => (
              <Link key={social.name} href={social.link}>
                <a className="hover:opacity-80">
                  <Image src={social.icon} width="25" height="25" />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
