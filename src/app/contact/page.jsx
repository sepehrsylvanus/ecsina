import MainLayout from "@/components/layout/MainLayout";
import Typography from "@/components/UI/Typography";
import React from "react";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import InputField from "@/components/UI/InputField";

export const metadata = {
  title: "تماس با ما",
  description:
    "سایت تخصصی ما با ارائه خدمات حرفه‌ای در زمینه نگارش پروپوزال و طراحی بوم کسب‌وکار و.. همراه شما در مسیر موفقیت است. ما با تیمی متخصص و باتجربه، آماده ارائه مشاوره و خدمات تخصصی به دانشجویان، استارتاپ‌ها و سازمان‌ها هستیم.",
  keywords: "",
  openGraph: {
    title: "Ecsina",
    type: "website",
    locale: "fa_IR",
  },
};

const ContactPage = () => {
  return (
    <MainLayout>
      <section className="flex flex-col  items-center my-5   min-w-screen">
        <div className="py-12 pb-10 px-4 md:px-8 lg:px-12 w-[90%] lg:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 shadow-xl bg-[#FFFFFF05] rounded-lg">
          <div className="col-span-1 flex flex-col justify-start">
            <div>
              <h1 className="text-black md:text-right  text-center text-xl md:text-3xl font-bold pt-8">تماس با اکسینا</h1>
              <Typography className={"font-medium taxt-base sm:text-lg  my-4  text-center md:text-right"}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                تکنولوژی مورد نیاز لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز
              </Typography>
            </div>

            <div className="mt-4  hidden md:flex md:flex-row-reverse items-center justify-end gap-8">
              <span className="bg-primary-7 flex items-center justify-center hover:bg-transparent border-2 text-white border-primary-7 hover:text-primary-7 transition-all ease-in duration-200 cursor-pointer p-3 rounded-full">
                <FaTelegramPlane size={35} />
              </span>
              <span className="bg-primary-7 flex items-center justify-center hover:bg-transparent border-2 text-white border-primary-7 hover:text-primary-7 transition-all ease-in duration-200 cursor-pointer p-3 rounded-full">
                <BiSolidPhoneCall size={35} />
              </span>
              <span className="bg-primary-7 flex items-center justify-center hover:bg-transparent border-2 text-white border-primary-7 hover:text-primary-7 transition-all ease-in duration-200 cursor-pointer p-3 rounded-full">
                <MdEmail size={35} />
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
};

function ContactForm() {
  return (
    <form className="flex flex-col w-full justify-between p-2 md:p-6 gap-6 col-span-1 shadow-xl  rounded-lg">
      <div className=" w-full grid gap-1 md:gap-2.5 grid-cols-2">
        <InputField type="text" title={"شماره تماس"} id={"phone"} required />
        <InputField type="text" title={"نام و نام‌خانوادگی"} id={"name"} required />
      </div>
      <InputField type="text" title={"ایمیل"} id={"email"} required />
      <div className=" relative ">
        <textarea
          id="message"
          rows="10"
          className={`w-full block px-6 pt-6  rounded-md text-base bg-primary-0  text-primary-14 appearance-none focus:outline-none focus:ring-0 peer resize-none `}
          placeholder="    "
        ></textarea>
        <label
          htmlFor={"message"}
          className="absolute text-sm text-main-1 duration-150 transform -translate-y-3
      scale-75 top-4 z-10 origin-[0] right-2 
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0
      peer-focus:scale-90
      peer-focus:-translate-y-3

      "
        >
          <span className="text-main-4 px-1 mt-2 text-sm">*</span>
          پیام خود را وارد کنید...
        </label>
      </div>

      <button className="bg-primary-7 mt-5 text-white p-2 rounded-lg text-base md:text-2xl  hover:bg-primary-10 transition">ارسال پیام</button>
      <div className="mt-8  md:hidden flex md:flex-row-reverse items-center justify-center gap-8">
        <span className="bg-primary-7 flex items-center justify-center hover:bg-transparent border-2 text-white border-primary-7 hover:text-primary-7 transition-all ease-in duration-200 cursor-pointer p-3 rounded-full">
          <FaTelegramPlane size={35} />
        </span>
        <span className="bg-primary-7 flex items-center justify-center hover:bg-transparent border-2 text-white border-primary-7 hover:text-primary-7 transition-all ease-in duration-200 cursor-pointer p-3 rounded-full">
          <BiSolidPhoneCall size={35} />
        </span>
        <span className="bg-primary-7 flex items-center justify-center hover:bg-transparent border-2 text-white border-primary-7 hover:text-primary-7 transition-all ease-in duration-200 cursor-pointer p-3 rounded-full">
          <MdEmail size={35} />
        </span>
      </div>
    </form>
  );
}

export default ContactPage;
