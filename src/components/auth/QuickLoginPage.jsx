"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoClose, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { GoArrowUpLeft } from "react-icons/go";

function QuickLoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "لطفا ایمیل خود را وارد کنید";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "ایمیل وارد شده معتبر نیست";
    }

    if (!formData.password) {
      newErrors.password = "لطفا رمز عبور خود را وارد کنید";
    } else if (formData.password.length < 6) {
      newErrors.password = "رمز عبور باید حداقل ۶ کاراکتر باشد";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("Login data:", formData);
      router.push("/");
    }, 1000);
  };

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-1 px-4 py-8">
      <div
        className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden"
        style={{ boxShadow: "0 10px 40px rgba(0, 24, 188, 0.15)" }}
      >
        {/* Header - Blue Background */}
        <div className="bg-primary-0 relative px-6 md:px-12 py-8 md:py-10">
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 md:top-6 md:left-6 text-black hover:text-gray-700 transition-colors cursor-pointer border border-gray-300 hover:border-gray-500 rounded-lg p-1"
            aria-label="بستن"
          >
            <IoClose size={26} />
          </button>

          <h1 className="text-center text-primary-7 font-bold text-xl md:text-3xl">
            ورود با دسترسی سریع
          </h1>
        </div>

        {/* Body */}
        <div className="px-6 md:px-12 py-8 md:py-10">
          {/* Forgot Password Link */}
          <div className="flex justify-end mb-6">
            <Link
              href="/forgot-password"
              className="text-primary-7 hover:text-primary-8 transition-colors text-sm md:text-base font-medium border border-primary-7/30 hover:border-primary-7 rounded-lg px-3 py-1"
            >
              فراموشی/ تغییر رمز عبور
            </Link>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <div className="bg-secondary-1 rounded-2xl p-4 md:p-5 border-2 border-gray-300 hover:border-primary-7/50 focus-within:border-primary-7 focus-within:shadow-[0_0_0_3px_rgba(0,24,188,0.1)] transition-all duration-200">
                <label
                  htmlFor="email"
                  className="block text-primary-7 font-semibold text-sm md:text-base mb-1 text-right"
                >
                  ایمیل
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  dir="ltr"
                  className="w-full bg-transparent border-none outline-none text-black text-sm md:text-base text-right placeholder:text-gray-400"
                  autoComplete="email"
                  placeholder="example@gmail.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-xs md:text-sm mt-1 text-right pr-2">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="bg-secondary-1 rounded-2xl p-4 md:p-5 border-2 border-gray-300 hover:border-primary-7/50 focus-within:border-primary-7 focus-within:shadow-[0_0_0_3px_rgba(0,24,188,0.1)] transition-all duration-200 relative">
                <label
                  htmlFor="password"
                  className="block text-primary-7 font-semibold text-sm md:text-base mb-1 text-right"
                >
                  رمز عبور
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-gray-500 hover:text-primary-7 transition-colors cursor-pointer border border-gray-300 hover:border-primary-7 rounded-lg p-1.5"
                    aria-label={showPassword ? "مخفی کردن رمز" : "نمایش رمز"}
                  >
                    {showPassword ? (
                      <IoEyeOffOutline size={20} />
                    ) : (
                      <IoEyeOutline size={20} />
                    )}
                  </button>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    dir="ltr"
                    className="w-full bg-transparent border-none outline-none text-black text-sm md:text-base text-right placeholder:text-gray-400"
                    autoComplete="current-password"
                    placeholder=".........."
                  />
                </div>
              </div>
              {errors.password && (
                <p className="text-red-600 text-xs md:text-sm mt-1 text-right pr-2">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-1/2 bg-primary-7 hover:bg-primary-8 disabled:opacity-70 text-white font-bold py-4 rounded-2xl text-base md:text-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 border-2 border-primary-9/20 hover:border-primary-9/50"
              >
                <GoArrowUpLeft size={20} />
                <span>{loading ? "در حال ورود..." : "ورود"}</span>
              </button>
            </div>
          </form>

          {/* Support Phone */}
          <div className="mt-10 text-left">
            <p className="text-gray-700 text-sm md:text-base">
              تلفن پشتیبانی:{" "}
              <span className="font-semibold" dir="ltr">
                011-33324700
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickLoginPage;
