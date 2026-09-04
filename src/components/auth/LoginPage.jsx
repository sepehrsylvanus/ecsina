"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { GoArrowUpLeft } from "react-icons/go";
import { HiOutlineLogin, HiArrowRight } from "react-icons/hi";

import { verifyOtp } from "@/services/auth/login";
import toast from "react-hot-toast";

// تبدیل اعداد انگلیسی به فارسی
const toFa = (str) => String(str).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

// ماسک کردن شماره: 09336344567 => 0933****4567
const maskPhone = (phone) =>
  phone && phone.length === 11 ? phone.slice(0, 4) + "****" + phone.slice(8) : phone;

function LoginPage() {
  const router = useRouter();

  // step: "phone" | "otp"
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(120);
  const [codeError, setCodeError] = useState("");
  const [loading, setLoading] = useState(false);
  const codeInputRef = useRef(null);

  const isExpired = timer === 0;
  const hasError = Boolean(codeError) && !isExpired;
  const isSubmitDisabled = loading || isExpired || !code || hasError;

  // شمارش معکوس (فقط در مرحله OTP)
  useEffect(() => {
    if (step !== "otp") return;
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [step]);

  const formatTimer = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return toFa(`${m}:${s}`);
  };

  const validatePhone = (value) => {
    if (!value) return "لطفا شماره تلفن خود را وارد کنید";
    if (!/^09\d{9}$/.test(value)) return "شماره تلفن معتبر نیست";
    return "";
  };

  // مرحله ۱: ارسال کد
  const handleSendCode = (e) => {
    e.preventDefault();
    const error = validatePhone(phone);
    if (error) {
      setPhoneError(error);
      return;
    }
    setPhoneError("");
    if (typeof window !== "undefined") {
      localStorage.setItem("phone", phone);
    }
    setTimer(120);
    setCode("");
    setCodeError("");
    setStep("otp");
  };

  // مرحله ۲: تایید کد از طریق API
  const handleVerify = async (e) => {
    e.preventDefault();
    if (isExpired) return;
    if (!code) {
      setCodeError("لطفا کد تایید را وارد کنید");
      return;
    }
    setLoading(true);

    const { data, error } = await verifyOtp(phone, code);
    setLoading(false);

    if (error || data?.detail !== "success") {
      setCodeError("کد اشتباه وارد شده است ...");
      return;
    }

    // ورود موفق
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", "true");
      // میدل‌ور محافظت /user کوکی isLoggedIn را چک می‌کند
      document.cookie = "isLoggedIn=true; path=/; max-age=86400";
      localStorage.removeItem("phone");
    }
    toast.success("ورود با موفقیت انجام شد. تا چند لحظه‌ی دیگر به داشبورد منتقل میشوید...");
    setTimeout(() => router.push("/user"), 2500);
  };

  // ارسال مجدد کد
  const handleResend = () => {
    setTimer(120);
    setCode("");
    setCodeError("");
    codeInputRef.current?.focus();
  };

  const handleBackToPhone = () => {
    setStep("phone");
    setCode("");
    setCodeError("");
  };

  const handleClose = () => router.push("/");

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-1 px-4 py-8">
      <div
        className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden"
        style={{ boxShadow: "0 10px 40px rgba(0, 24, 188, 0.15)" }}
      >
        {/* ==================== مرحله ۱: ورود شماره تلفن ==================== */}
        {step === "phone" && (
          <div className="p-6 md:p-12">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-4">
              <Link
                href="/quick-login"
                className="flex items-center gap-2 text-primary-7 hover:text-primary-8 transition-colors font-semibold text-sm md:text-base border border-primary-7/30 hover:border-primary-7 rounded-lg px-3 py-1.5"
              >
                <span>ورود با دسترسی سریع</span>
                <HiOutlineLogin size={22} />
              </Link>

              <button
                onClick={handleClose}
                className="text-gray-600 hover:text-black transition-colors cursor-pointer border border-gray-300 hover:border-gray-500 rounded-lg p-1"
                aria-label="بستن"
              >
                <IoClose size={26} />
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
              برای ورود به <span className="text-primary-7">اکسینا</span> شماره
              تلفن خود را وارد کنید.
            </h1>

            {/* Subtitle */}
            <p className="text-center bg-primary-0 text-black text-sm md:text-base py-2 px-4 rounded-md inline-block w-full md:w-auto md:mx-auto mx-0 mb-8">
              کد تایید به تلفن همراه شما ارسال خواهد شد.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSendCode}
              className="max-w-2xl mx-auto space-y-6"
            >
              {/* Phone Input */}
              <label
                htmlFor="phone"
                className="block cursor-text bg-secondary-1 rounded-2xl p-4 md:p-5 border-2 border-gray-300 hover:border-primary-7/50 focus-within:border-primary-7 focus-within:shadow-[0_0_0_3px_rgba(0,24,188,0.1)] transition-all duration-200"
              >
                <span className="block text-black font-bold text-sm md:text-base mb-2 text-right">
                  شماره تلفن همراه
                </span>
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 11);
                    setPhone(value);
                    if (phoneError) setPhoneError("");
                  }}
                  placeholder="تلفن همراه~مثال: ۰۹۱۲۰۰۰۰۰۰۰"
                  dir="rtl"
                  autoFocus
                  className={`w-full bg-transparent border-none outline-none text-sm md:text-base text-right placeholder:text-primary-7/60 ${
                    phoneError ? "text-red-600" : "text-primary-7"
                  }`}
                />
              </label>

              {/* Error message */}
              {phoneError && (
                <p className="text-red-600 text-xs md:text-sm text-right">
                  {phoneError}
                </p>
              )}

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="w-full md:w-1/2 bg-primary-7 hover:bg-primary-8 text-white font-bold py-4 rounded-2xl text-base md:text-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 border-2 border-primary-9/20 hover:border-primary-9/50"
                >
                  <span>ارسال کد</span>
                  <GoArrowUpLeft size={20} />
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
        )}

        {/* ==================== مرحله ۲: ورود کد دو مرحله‌ای ==================== */}
        {step === "otp" && (
          <div>
            {/* Header - Blue Background */}
            <div className="bg-primary-0 relative px-6 md:px-12 py-8 md:py-10">
              <button
                onClick={handleClose}
                className="absolute top-4 left-4 md:top-6 md:left-6 text-black hover:text-gray-700 transition-colors cursor-pointer"
                aria-label="بستن"
              >
                <IoClose size={26} />
              </button>

              {isExpired && (
                <button
                  onClick={handleBackToPhone}
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-black hover:text-gray-700 transition-colors cursor-pointer"
                  aria-label="بازگشت"
                >
                  <HiArrowRight size={26} />
                </button>
              )}

              <h1 className="text-center text-primary-7 font-bold text-xl md:text-3xl">
                ورود دو مرحله‌ای
              </h1>
            </div>

            {/* Body */}
            <div className="px-6 md:px-12 py-8 md:py-10">
              {/* Title */}
              <h2 className="text-center text-black text-lg md:text-2xl font-bold mb-4">
                برای ورود، کد ارسالی به موبایل خود را در فرم زیر وارد نمایید.
              </h2>

              {/* Badge + Timer */}
              <div className="flex flex-row-reverse items-center justify-between mb-4 flex-wrap gap-2">
                <p className="bg-primary-0 text-primary-7 text-xs md:text-sm py-2 px-4 rounded-md">
                  کد تایید به شماره همراه {toFa(maskPhone(phone))} ارسال شده
                  است.
                </p>
                {!isExpired ? (
                  <span className="text-primary-7 font-bold text-xl md:text-2xl">
                    {formatTimer(timer)}
                  </span>
                ) : (
                  <button
                    onClick={handleResend}
                    className="text-primary-7 hover:text-primary-8 underline text-sm md:text-base cursor-pointer"
                  >
                    ارسال مجدد کد
                  </button>
                )}
              </div>

              {/* Expired error */}
              {isExpired && (
                <p className="text-red-600 text-sm md:text-base mb-2 text-right font-medium">
                  زمان شما به پایان رسیده است. دوباره تلاش کنید
                </p>
              )}

              {/* Form */}
              <form onSubmit={handleVerify} className="space-y-4">
                <label
                  htmlFor="code"
                  className="block cursor-text bg-secondary-1 rounded-2xl p-4 md:p-5 border-2 border-gray-300 hover:border-primary-7/50 focus-within:border-primary-7 focus-within:shadow-[0_0_0_3px_rgba(0,24,188,0.1)] transition-all duration-200"
                >
                  <span
                    className={`block font-semibold text-sm md:text-base mb-2 text-right ${
                      hasError ? "text-red-600" : "text-primary-7"
                    }`}
                  >
                    کد تایید
                  </span>
                  <input
                    id="code"
                    ref={codeInputRef}
                    type="text"
                    inputMode="numeric"
                    value={code}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 5);
                      setCode(value);
                      if (codeError) setCodeError("");
                    }}
                    maxLength={5}
                    dir="ltr"
                    disabled={isExpired}
                    autoFocus
                    autoComplete="one-time-code"
                    className={`w-full bg-transparent border-none outline-none text-base md:text-lg text-right tracking-widest disabled:cursor-not-allowed ${
                      hasError ? "text-red-600 font-bold" : "text-black"
                    }`}
                  />
                </label>

                {/* Wrong code error */}
                {hasError && (
                  <p className="text-red-600 text-xs md:text-sm text-right">
                    {codeError}
                  </p>
                )}

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className={`w-full md:w-1/2 font-bold py-4 rounded-2xl text-base md:text-lg transition-all duration-200 flex items-center justify-center gap-2 border-2 ${
                      isSubmitDisabled
                        ? "bg-gray-400 text-white border-gray-500/30 cursor-not-allowed"
                        : "bg-primary-7 hover:bg-primary-8 text-white border-primary-9/20 hover:border-primary-9/50 cursor-pointer"
                    }`}
                  >
                    <GoArrowUpLeft size={20} />
                    <span>{loading ? "در حال بررسی..." : "ورود"}</span>
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
        )}
      </div>
    </div>
  );
}

export default LoginPage;