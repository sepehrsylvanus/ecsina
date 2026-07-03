"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { GoArrowUpLeft } from "react-icons/go";
import { HiArrowLeft } from "react-icons/hi";

// 🔐 کد صحیح hard code شده
const CORRECT_CODE = "12345";

function VerifyOtpPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [maskedPhone, setMaskedPhone] = useState("");
  const [timer, setTimer] = useState(120); // 2 دقیقه
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  // آیا تایمر تمام شده؟
  const isExpired = timer === 0;

  // آیا کد اشتباهه؟ (برای نمایش قرمز)
  const hasError = Boolean(error) && !isExpired;

  // گرفتن شماره از localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPhone = localStorage.getItem("phone");
      if (!savedPhone) {
        router.push("/login");
        return;
      }
      setPhone(savedPhone);

      // ماسک کردن شماره: 09336344567 => 0933****4567
      if (savedPhone.length === 11) {
        const masked = savedPhone.slice(0, 4) + "****" + savedPhone.slice(8);
        setMaskedPhone(masked);
      } else {
        setMaskedPhone(savedPhone);
      }
    }
  }, [router]);

  // شمارش معکوس تایمر
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // فرمت تایمر به شکل mm:ss با اعداد فارسی
  const formatTimer = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    const formatted = `${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
    return formatted.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isExpired) return;

    if (!code) {
      setError("لطفا کد تایید را وارد کنید");
      return;
    }

    setLoading(true);

    // شبیه‌سازی درخواست تایید
    setTimeout(() => {
      setLoading(false);

      // ✅ چک کردن کد hard code شده
      if (code === CORRECT_CODE) {
        console.log("Login successful for phone:", phone);
        if (typeof window !== "undefined") {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.removeItem("phone");
        }
        router.push("/");
      } else {
        // ❌ کد اشتباه
        setError("کد اشتباه وارد شده است ...");
      }
    }, 600);
  };

  // ارسال مجدد کد
  const handleResend = async () => {
    if (resendLoading) return;
    setResendLoading(true);
    setError("");

    setTimeout(() => {
      setResendLoading(false);
      setTimer(120);
      setCode("");
    }, 800);
  };

  const handleClose = () => {
    router.push("/");
  };

  // آیا دکمه ورود باید فعال باشه؟
  const isSubmitDisabled = loading || isExpired || !code || hasError;

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-1 px-4 py-8">
      <div
        className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden"
        style={{ boxShadow: "0 10px 40px rgba(0, 24, 188, 0.15)" }}
      >
        {/* Header - Blue Background */}
        <div className="bg-primary-0 relative px-6 md:px-12 py-8 md:py-10">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 md:top-6 md:left-6 text-black hover:text-gray-700 transition-colors cursor-pointer border border-gray-300 hover:border-gray-500 rounded-lg p-1"
            aria-label="بستن"
          >
            <IoClose size={26} />
          </button>

          {/* Title */}
          <h1 className="text-center text-primary-7 font-bold text-xl md:text-3xl">
            ورود دو مرحله‌ای
          </h1>
        </div>

        {/* Body */}
        <div className="px-6 md:px-12 py-8 md:py-10">
          {/* Description */}
          <p className="text-center text-black text-sm md:text-base mb-4">
            برای ورود ، کد ارسالی به موبایل خود را در فرم زیر وارد نمایید.
          </p>

          {/* Info Bar - Timer + Sent To Message */}
          <div className="flex items-center justify-between mb-2 gap-3">
            {/* Timer یا فضای خالی */}
            <div className="min-w-[60px]">
              {!isExpired && (
                <span
                  className="text-primary-7 font-bold text-base md:text-lg"
                  dir="ltr"
                >
                  {formatTimer(timer)}
                </span>
              )}
            </div>

            {/* Sent message */}
            <div className="bg-primary-0 text-black text-xs md:text-sm py-1.5 px-3 rounded-md">
              کد تایید به شماره همراه{" "}
              <span dir="ltr" className="font-semibold">
                {maskedPhone}
              </span>{" "}
              ارسال شده است.
            </div>
          </div>

          {/* Expired Error + Resend Button */}
          {isExpired && (
            <div className="flex flex-col items-center gap-3 mb-4">
              <p className="text-red-600 text-xs md:text-sm text-right pr-1 font-medium">
                زمان شما به پایان رسیده است. دوباره تلاش کنید
              </p>
              <button
                onClick={handleResend}
                disabled={resendLoading}
                className="bg-primary-7 hover:bg-primary-8 text-white font-bold py-3 px-8 rounded-2xl text-sm md:text-base transition-all duration-200 border-2 border-primary-9/20 hover:border-primary-9/50 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {resendLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>در حال ارسال...</span>
                  </>
                ) : (
                  <>
                    <HiArrowLeft size={20} />
                    <span>ارسال مجدد کد</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Code Input Box */}
            <label
              htmlFor="code"
              className={`block bg-secondary-1 rounded-2xl p-4 md:p-5 border-2 transition-all duration-200 ${
                isExpired
                  ? "border-gray-300 opacity-70 cursor-not-allowed"
                  : hasError
                    ? "border-red-500 focus-within:border-red-600 focus-within:shadow-[0_0_0_3px_rgba(220,38,38,0.1)] cursor-text"
                    : "border-gray-300 hover:border-primary-7/50 focus-within:border-primary-7 focus-within:shadow-[0_0_0_3px_rgba(0,24,188,0.1)] cursor-text"
              }`}
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
                type="text"
                inputMode="numeric"
                value={code}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setCode(value);
                  // پاک کردن ارور با تغییر مقدار
                  if (error) setError("");
                }}
                maxLength={6}
                dir="ltr"
                disabled={isExpired}
                className={`w-full bg-transparent border-none outline-none text-base md:text-lg text-right tracking-widest disabled:cursor-not-allowed ${
                  hasError ? "text-red-600 font-bold" : "text-black"
                }`}
                autoFocus
                autoComplete="one-time-code"
              />
            </label>

            {/* Error message (فقط برای کد اشتباه) */}
            {hasError && (
              <p className="text-red-600 text-xs md:text-sm mt-2 text-right pr-2 font-medium">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className={`w-full md:w-1/2 font-bold py-4 rounded-2xl text-base md:text-lg transition-all duration-200 flex items-center justify-center gap-2 border-2 ${
                  isSubmitDisabled
                    ? "bg-gray-400 text-white border-gray-500/30 cursor-not-allowed"
                    : "bg-primary-7 hover:bg-primary-8 text-white border-primary-9/20 hover:border-primary-9/50 cursor-pointer"
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>در حال بررسی...</span>
                  </>
                ) : (
                  <>
                    <GoArrowUpLeft size={20} />
                    <span>ورود</span>
                  </>
                )}
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

export default VerifyOtpPage;
