"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { GoArrowUpLeft } from "react-icons/go";
import { HiOutlineLogin } from "react-icons/hi";

function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validatePhone = (value) => {
    const phoneRegex = /^09\d{9}$/;
    return phoneRegex.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!phone) {
      setError("لطفا شماره تلفن خود را وارد کنید");
      return;
    }

    if (!validatePhone(phone)) {
      setError("شماره تلفن وارد شده معتبر نیست");
      return;
    }

    setLoading(true);

    // شبیه‌سازی درخواست ارسال کد
    setTimeout(() => {
      setLoading(false);
      // ذخیره شماره در localStorage یا state management
      if (typeof window !== "undefined") {
        localStorage.setItem("phone", phone);
      }
      router.push("/verify-otp");
    }, 800);
  };

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-1 px-4 py-8">
      <div
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-6 md:p-12 relative"
        style={{ boxShadow: "0 10px 40px rgba(0, 24, 188, 0.15)" }}
      >
        {/* Top Bar - Close + Quick Login */}
        <div className="flex items-center justify-between mb-4">
          {/* Quick Access Login */}
          <Link
            href="/quick-login"
            className="flex items-center gap-2 text-primary-7 hover:text-primary-8 transition-colors font-semibold text-sm md:text-base"
          >
            <span>ورود با دسترسی سریع</span>
            <HiOutlineLogin size={22} />
          </Link>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-black transition-colors cursor-pointer"
            aria-label="بستن"
          >
            <IoClose size={28} />
          </button>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center justify-center mt-2 mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/assets/icons/Logo.svg"
              alt="اکسینا"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-center text-black text-lg md:text-2xl font-bold mb-3">
          برای ورود به <span className="text-primary-7">اکسینا</span> شماره تلفن
          خود را وارد کنید.
        </h1>

        {/* Subtitle */}
        <p className="text-center bg-primary-0 text-black text-sm md:text-base py-2 px-4 rounded-md inline-block w-full md:w-auto md:mx-auto mx-0 mb-8">
          کد تایید به تلفن همراه شما ارسال خواهد شد.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          {/* Phone Input Box */}
          <div className="bg-secondary-1 rounded-2xl p-4 md:p-5 border border-transparent focus-within:border-primary-7 transition-colors">
            <label
              htmlFor="phone"
              className="block text-black font-bold text-sm md:text-base mb-2 text-right"
            >
              شماره تلفن همراه
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => {
                // فقط اعداد
                const value = e.target.value.replace(/\D/g, "");
                setPhone(value);
                if (error) setError("");
              }}
              placeholder="تلفن همراه-مثال: 09120000000"
              maxLength={11}
              dir="rtl"
              className="w-full bg-transparent border-none outline-none text-primary-7 placeholder:text-primary-7/60 text-sm md:text-base text-right"
            />
          </div>

          {/* Error message */}
          {error && (
            <p className="text-red-600 text-sm mt-2 text-right">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-primary-7 hover:bg-primary-8 disabled:opacity-70 text-white font-bold py-4 rounded-2xl text-base md:text-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <GoArrowUpLeft size={20} />
            <span>{loading ? "در حال ارسال..." : "ارسال کد"}</span>
          </button>
        </form>

        {/* Support Phone */}
        <div className="mt-8 text-left">
          <p className="text-gray-700 text-sm md:text-base">
            تلفن پشتیبانی:{" "}
            <span className="font-semibold" dir="ltr">
              011-33324700
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
