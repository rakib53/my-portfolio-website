import { useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import logo from "/logo.png";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const loginResponse = await axiosInstance.post("/login", {
        email: formData?.email!,
        password: formData?.password!,
      });

      console.log(loginResponse);

      // if (userData?.email) {
      //   return redirect("/dashboard");
      // } else {
      //   return redirect("/login");
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="max-w-[440px] w-full rounded-2xl bg-[var(--navbar-bg)]">
        <div className="flex justify-center py-4">
          <img
            src={logo}
            alt="Rakib hossen portfolio's logo"
            className="w-[60px]"
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-1">
          <h2 className="text-2xl font-semibold font-inter">
            Login Admin Account
          </h2>
          <p className="text-[#525866] text-base">
            Enter your details to login
          </p>
        </div>

        {/* form details  */}
        <div className="p-4">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-3">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="email" className="text-black font-monserrat">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  className="w-full p-3 rounded-lg bg-primaryCardBG outline-none text-base text-gray-100"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="email" className="text-black font-monserrat">
                  Password*
                </label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={formData.password}
                  className="w-full p-3 rounded-lg bg-primaryCardBG outline-none text-base text-gray-100"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div className="flex gap-1">
                <input type="checkbox" name="remember_me" id="remember_me" />
                <label htmlFor="remember_me" className="">
                  Keep me logged in
                </label>
              </div>
              <div className="mt-4">
                <button className="w-full p-3 rounded-lg bg-primaryCardBG outline-none text-white text-base">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
