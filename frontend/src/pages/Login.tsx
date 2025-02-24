import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance";
import SquareCheckbox from "../components/Checkbox";
import logo from "/logo.png";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isRemember: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const loginResponse = await axiosInstance.post("/login", {
        email: formData?.email!,
        password: formData?.password!,
        isRemember: formData?.isRemember,
      });
      setIsLoading(false);
      if (loginResponse?.data?.email) {
        toast.success("Logged in successfully!");
        navigate("/dashboard");
      } else {
        toast.success("Could not login!");
        setIsLoading(false);
      }
    } catch (error) {
      toast.success("Could not login!");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <Toaster />
      <div className="max-w-[440px] w-full rounded-2xl bg-[#aaaaaa7e]">
        <NavLink to={"/"}>
          <div className="flex justify-center py-4">
            <img
              src={logo}
              alt="Rakib hossen portfolio's logo"
              className="w-[60px]"
            />
          </div>
        </NavLink>
        <div className="flex justify-center items-center flex-col gap-1">
          <h2 className="text-2xl font-inter text-black font-bold">
            Login Admin Account
          </h2>
          <p className="text-black text-base font-medium">
            Enter your details to login
          </p>
        </div>

        {/* form details  */}
        <div className="p-4">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-3">
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-black font-medium font-monserrat"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  className="w-full p-3 rounded-lg bg-primaryCardBG outline-none text-base text-gray-100"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="text-black font-medium font-monserrat"
                >
                  Password*
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your Password"
                  value={formData.password}
                  className="w-full p-3 rounded-lg bg-primaryCardBG outline-none text-base text-gray-100"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div className="w-full flex gap-1">
                <SquareCheckbox
                  isSelected={formData.isRemember}
                  handleCheckbox={() =>
                    setFormData({
                      ...formData,
                      isRemember: !formData.isRemember,
                    })
                  }
                  label="Keep me logged in"
                  checkboxNotSelectClass="border-primaryCardBG"
                  checkboxSelectedClass="!bg-primaryCardBG border-primaryCardBG"
                  labelClass="text-black !font-medium font-inter"
                />
              </div>
              <div className="mt-4">
                <button className="w-full p-3 rounded-lg bg-primaryCardBG hover:bg-[#071122] outline-none text-white text-base flex justify-center">
                  {isLoading ? (
                    <span className="loginButtonLoading"></span>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
