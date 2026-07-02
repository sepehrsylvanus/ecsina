"use client";
import React, { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { IoCloseSharp } from "react-icons/io5";
import { GoArrowUpLeft } from "react-icons/go";

function GuideModal() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={open}
        className="bg-primary-7 rounded-xl md:rounded-2xl text-white text-nowrap py-3 px-4 md:py-4 md:px-8 text-sm md:text-lg font-semibold cursor-pointer hover:bg-primary-8 transition-all duration-200 flex items-center gap-2"
      >
        <GoArrowUpLeft size={18} />
        راهنمای دانلود قالب
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 w-screen overflow-y-auto p-4">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel
              transition
              className="sm:w-4/5 w-full max-w-4xl shadow-xl rounded-2xl bg-secondary-2 drop-shadow-2xl p-8 md:p-10 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="div"
                className="flex justify-between items-center"
              >
                <h2 className="text-xl md:text-3xl font-bold">
                  راهنمای دانلود و استفاده از قالب‌های رایگان
                </h2>
                <button onClick={close} className="hover:opacity-70">
                  <IoCloseSharp size={24} />
                </button>
              </DialogTitle>

              <p className="mt-5 text-base md:text-lg font-medium leading-8">
                اکسین در این بخش، مجموعه‌ای از قالب‌های حرفه‌ای و استاندارد را
                برای دانلود رایگان در اختیار شما قرار می‌دهد تا بتوانید به‌راحتی
                و بدون هزینه از آن‌ها در پروژه‌های خود استفاده کنید.
                <br />
                این قالب‌ها با هدف افزایش بهره‌وری و صرفه‌جویی در زمان تهیه
                شده‌اند.
              </p>

              <div className="mt-8">
                <h3 className="text-xl md:text-2xl my-4 font-bold">
                  نحوه دانلود و استفاده
                </h3>
                <ul className="flex flex-col items-start gap-3">
                  <li className="text-base md:text-lg font-bold">
                    1. قالب مورد نظر خود را جستجو کنید.
                  </li>
                  <li className="text-base md:text-lg font-bold">
                    2. قالب دلخواه خود را انتخاب کنید.
                  </li>
                  <li className="text-base md:text-lg font-bold">
                    3. روی دکمه "دانلود" کلیک کنید.
                  </li>
                  <li className="text-base md:text-lg font-bold">
                    4. فایل را با Microsoft Word باز کنید.
                  </li>
                  <li className="text-base md:text-lg font-bold">
                    5. اطلاعات موردنظر را وارد کنید.
                  </li>
                  <li className="text-base md:text-lg font-bold">
                    6. فایل را ذخیره کرده و استفاده کنید.
                  </li>
                </ul>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default GuideModal;
