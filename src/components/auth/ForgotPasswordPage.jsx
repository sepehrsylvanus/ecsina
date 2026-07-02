"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { GoArrowUpLeft } from "react-icons/go";

function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("لطفا ایمیل خود را وارد کنید");
      return;
    }
    if (!validateEmail(email)) {
      setError("ایمیل وارد شده معتبر نیست");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-1 px-4 py-8">
      <div
        className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden"
        style={{ boxShadow: "0 10px 40px rgba(0, 24, 188, 0.15)" }}
      >
        {/* Header */}
        <div className="bg-primary-0 relative px-6 md:px-12 py-8 md:py-10">
          <button
            onClick={() => router.back()}
            className="absolute top-4 left-4 md:top-6 md:left-6 text-black hover:text-gray-700 cursor-pointer"
          >
            <IoClose size={26} />
          </button>
          <h1 className="text-center text-primary-7 font-bold text-xl md:text-3xl">
            فراموشی رمز عبور
          </h1>
        </div>

        {/* Body */}
        <div className="px-6 md:px-12 py-8 md:py-10">
          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-black font-bold text-lg md:text-xl mb-2">
                لینک بازیابی ارسال شد
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                لینک بازیابی رمز عبور به ایمیل شما ارسال شد.
              </p>
              <button
                onClick={() => router.push("/quick-login")}
                className="mt-6 bg-primary-7 hover:bg-primary-8 text-white font-semibold py-3 px-8 rounded-2xl cursor-pointer transition-colors"
              >
                بازگشت به ورود
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-black text-sm md:text-base mb-6 text-right">
                ایمیل خود را وارد کنید تا لینک بازیابی رمز عبور برای شما ارسال
                شود.
              </p>

              <div>
                <div className="bg-secondary-1 rounded-2xl p-4 md:p-5 border border-transparent focus-within:border-primary-7 transition-colors">
                  <label
                    htmlFor="email"
                    className="block text-primary-7 font-semibold text-sm md:text-base mb-1 text-right"
                  >
                    ایمیل
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    dir="ltr"
                    className="w-full bg-transparent border-none outline-none text-black text-sm md:text-base text-right"
                  />
                </div>
                {error && (
                  <p className="text-red-600 text-xs md:text-sm mt-1 text-right pr-2">
                    {error}
                  </p>
                )}
              </div>

              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-1/2 bg-primary-7 hover:bg-primary-8 disabled:opacity-70 text-white font-bold py-4 rounded-2xl text-base md:text-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <GoArrowUpLeft size={20} />
                  <span>
                    {loading ? "در حال ارسال..." : "ارسال لینک بازیابی"}
                  </span>
                </button>
              </div>

              <div className="mt-10 text-left">
                <p className="text-gray-700 text-sm md:text-base">
                  تلفن پشتیبانی:{" "}
                  <span className="font-semibold" dir="ltr">
                    011-33324700
                  </span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
