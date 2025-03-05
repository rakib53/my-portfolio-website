import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiPhoneCall } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { MdOutlineMarkEmailRead, MdOutlineWhatsapp } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [queryData, setQueryData] = useState({
    fullName: "",
    email: "",
    query: "",
  });
  const form = useRef<HTMLFormElement>(null);

  const handleQuerySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!queryData?.fullName) {
      toast.error("Please enter your name", { position: "top-right" });
      return;
    }
    if (!queryData?.email) {
      toast.error("Please enter your email", { position: "top-right" });
      return;
    }
    if (!queryData?.query) {
      toast.error("Please enter your query", { position: "top-right" });
      return;
    }

    setIsLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_95sk5ai",
          "template_hgdoimb",
          form.current,
          "uPXsGs9-DiZR9pBHV"
        )
        .then((result: any) => {
          setIsLoading(false);
          toast.success("Query submitted", { position: "top-right" });
          console.log(result.text);
        })
        .catch((error: any) => {
          setIsLoading(false);
          toast.error("Error sending query submitted", {
            position: "top-right",
          });
          console.log(error.text);
        });
    } else {
      setIsLoading(false);
      toast.error("Form reference is not available", { position: "top-right" });
    }

    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section-margin" id="contact">
      <Toaster />
      <div className="max-w-[800px] w-full mx-auto">
        <h2 className="section-title">Get in touch</h2>
        <p className="section-description">
          Let's build something amazing together!
        </p>
        <div className="flex flex-col px-5 md:px-0 md:flex-row gap-[50px] justify-between">
          <div>
            <h3 className="text-text-color mb-5 text-center font-inter font-medium text-lg">
              Talk to me
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex gap-1.5 flex-col items-center py-[25px] px-[30px] rounded-[4px] bg-primaryCardBG">
                <MdOutlineMarkEmailRead className="w-[30px] h-[30px] text-text-color" />
                <h4 className="text-text-color font-inter font-medium">
                  Email
                </h4>
                <p className="text-base font-medium text-text-color2 font-inter">
                  rakibdev53@gmail.com
                </p>
                <span className="flex items-center text-sm font-medium text-primary-color cursor-pointer font-monserrat">
                  Write me <BsArrowRightShort className="w-[22px] h-[22px]" />
                </span>
              </div>
              <div className="flex gap-1.5 flex-col items-center py-[25px] px-[30px] rounded-[4px] bg-primaryCardBG">
                <MdOutlineWhatsapp className="w-[30px] h-[30px] text-text-color" />
                <h4 className="text-text-color font-inter font-medium">
                  Whatsapp
                </h4>
                <p className="text-base font-medium text-text-color2 font-inter">
                  +8801980551313
                </p>
                <span className="flex items-center text-sm font-medium text-primary-color font-monserrat">
                  <NavLink
                    to={"https://wa.me/+8801980551313"}
                    target=" "
                    className="flex items-center text-sm font-medium text-primary-color cursor-pointer font-monserrat"
                  >
                    Whatsapp me
                    <BsArrowRightShort className="w-[22px] h-[22px]" />
                  </NavLink>
                </span>
              </div>
              <div className="flex gap-1.5 flex-col items-center py-[25px] px-[30px] rounded-[4px] bg-primaryCardBG">
                <BiPhoneCall className="w-[30px] h-[30px] text-text-color" />
                <h4 className="text-text-color font-inter font-medium">
                  Phone
                </h4>
                <p className="text-base font-medium text-text-color2 font-inter">
                  +8801980551313
                </p>
                <span className="flex items-center text-sm font-medium text-primary-color cursor-pointer font-monserrat">
                  Call me
                  <BsArrowRightShort className="w-[22px] h-[22px]" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-text-color mb-5 text-center font-inter font-medium text-lg">
              Write me your project
            </h3>
            <form
              className="w-full flex flex-col gap-8"
              ref={form}
              onSubmit={handleQuerySubmit}
            >
              <div>
                <div className="relative">
                  <label
                    htmlFor="to_name"
                    className="text-sm absolute -top-2 left-4 text-text-color bg-bg-color"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="to_name"
                    name="to_name"
                    className="w-full block outline-none text-text-color rounded border border-text-color bg-transparent hover:bg-primaryCardBG font-inter p-4 duration-200"
                    placeholder="Enter your fullname"
                    value={queryData.fullName}
                    onChange={(e) => {
                      setQueryData({
                        ...queryData,
                        fullName: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <label
                    htmlFor="from_name"
                    className="text-sm absolute -top-2 left-4 text-text-color bg-bg-color"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="from_name"
                    name="from_name"
                    className="w-full block outline-none text-text-color rounded border border-text-color !bg-transparent hover:bg-primaryCardBG font-inter p-4 duration-200 !fill-transparent"
                    placeholder="Enter your email"
                    value={queryData.email}
                    onChange={(e) => {
                      setQueryData({
                        ...queryData,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm absolute -top-2 left-4 text-text-color bg-bg-color"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    className="w-full block outline-none text-text-color rounded border border-text-color bg-transparent hover:bg-primaryCardBG font-inter p-4 duration-200"
                    style={{ resize: "none" }}
                    placeholder="Enter your query"
                    value={queryData.query}
                    onChange={(e) => {
                      setQueryData({
                        ...queryData,
                        query: e.target.value,
                      });
                    }}
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-base py-2.5 px-10 outline-none text-text-color bg-transparent border border-text-color rounded-[4px] font-inter cursor-pointer hover:bg-primaryCardBG duration-200"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
