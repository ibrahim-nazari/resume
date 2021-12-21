import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { SocialMedia } from "../constant/SocialMedai";
import { Navigation } from "../constant/Navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ page }) {
  return (
    <Disclosure as="nav" className="bg-gray-800 fixed top-0 left-0 z-50 w-full">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {Navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            page == item.href
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={page == item.href ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden  lg:flex space-x-4 mr-6 sm:mr-12">
                  <Link href="mailto:nazaricode@gmail.com">
                    <a className="flex space-x-4 items-center">
                      <Image
                        src="/images/socialmedia/email.svg"
                        width={25}
                        height={25}
                        objectFit="contain"
                      />
                      <span className="text-white">nazaricode@gmail.com</span>
                    </a>
                  </Link>
                  <Link href="mailto:nazaricode@gmail.com">
                    <a className="flex space-x-4 items-center">
                      <Image
                        src="/images/socialmedia/phone.svg"
                        width={20}
                        height={20}
                        objectFit="contain"
                      />

                      <Link href="tel:+93745287692">
                        <a className="text-white">+93745287692</a>
                      </Link>
                    </a>
                  </Link>
                </div>
                <div className="flex space-x-4">
                  {SocialMedia.slice(0, 2).map((social) => (
                    <Link key={social.name} href={social.link} target="_blank">
                      <a className="hover:opacity-80">
                        <Image src={social.icon} width="25" height="25" />
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
