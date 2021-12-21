import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const RequestQuote = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [state, setstate] = useState({ error: false, sent: false });
  const [sending, setSending] = useState(false);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const { sent, error } = state;
  const { name, lastName, email, message, phone } = data;
  const submit = (e) => {
    setSending(true);
    e.preventDefault();
    fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status != 200) {
          setSending(false);
          setstate({ error: true, sent: true });
          return false;
        }
        setstate({ ...state, sent: true });
        setSending(false);
        setData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setSending(false);
        setstate({ error: true, sent: true });
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto p-5 my-10 sm:my-16">
      <h2
        data-aos="fade-up"
        className="text-gray-700 text-center font-bold title-shadow text-3xl sm:text-5xl my-10 sm:my-14"
      >
        REQUEST A QUOTE
      </h2>
      <div
        className="shadow-md  flex flex-col md:flex-row  max-w-screen-lg mx-auto mt-10"
        data-aos="fade-up"
      >
        <div className="bg-gray-800 text-gray-100 p-8 flex-shrink min-w-[300px]">
          <div className="flex space-x-8 items-center mb-8" data-aos="fade-up">
            <Image
              src="/images/socialmedia/email.svg"
              width={25}
              height={25}
              objectFit="contain"
            />
            <Link href="mailto:nazaricode@gmail.com">
              <a>nazaricode@gmail.com</a>
            </Link>
          </div>
          <div className="flex space-x-8 items-center my-8" data-aos="fade-up">
            <Image
              src="/images/socialmedia/phone.svg"
              width={20}
              height={20}
              objectFit="contain"
            />
            <Link href="tel:+93745287692">
              <a>+93745287692</a>
            </Link>
          </div>
          <div className="flex space-x-8 items-center my-8" data-aos="fade-up">
            <Image
              src="/images/socialmedia/whatsapp.svg"
              width={25}
              height={25}
              objectFit="contain"
            />
            <Link href="https://wa.link/1n5box">
              <a>+93745287692</a>
            </Link>
          </div>
          <div className="flex space-x-8 items-center my-8" data-aos="fade-up">
            <Image
              src="/images/socialmedia/telegram.svg"
              width={25}
              height={25}
              objectFit="contain"
            />
            <Link href="https://t.me/nazaricode">
              <a>+93745287692</a>
            </Link>
          </div>
        </div>
        <div className="p-8 bg-gray-100 w-full">
          {sent && (
            <div
              className={` ${error ? "bg-red-100" : "bg-green-100"} border ${
                error
                  ? "border-red-400 text-red-700"
                  : "border-green-400 text-green-700"
              } px-4 py-3 rounded relative w-3/4 mb-4`}
              role="alert"
            >
              <strong className="font-bold">
                {" "}
                {error ? "Error: " : "Success: "}
              </strong>
              <span className="block sm:inline">
                {error
                  ? "Something went wrong, try again."
                  : "Message successfully sent!"}
              </span>
            </div>
          )}

          <form
            className="grid grid-cols-1 lg:grid-cols-2 gap-9"
            onSubmit={submit}
            data-aos="fade-up"
          >
            <div className="flex  items-center">
              <label className="w-24" htmlFor="name">
                Name:
              </label>
              <input
                className=" placeholder-gray-500 p-2 border outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="flex  items-center">
              <label className="w-24" htmlFor="name">
                Last Name:
              </label>
              <input
                className=" placeholder-gray-500 p-2 border outline-none"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="last name"
                value={lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center">
              <label className="w-24" htmlFor="email">
                Email:
              </label>
              <input
                className=" placeholder-gray-500 p-2 border outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="flex  items-center">
              <label className="w-24" htmlFor="phone">
                Phone:
              </label>
              <input
                className=" placeholder-gray-500 p-2 border outline-none"
                type="text"
                name="phone"
                id="phone"
                placeholder="phone"
                value={phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="" htmlFor="message">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                onChange={handleChange}
                className="border h-40 w-full outline-none p-3 my-4"
                value={message}
              />

              {sending ? (
                <button
                  disabled={true}
                  className="bg-blue-300 px-4 py-2 text-gray-100 cursor-default "
                >
                  Sending...
                </button>
              ) : (
                <button className="bg-blue-300 px-4 py-2 text-gray-100 hover:bg-blue-400 ">
                  Send
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
