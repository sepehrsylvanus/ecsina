"use client";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";
import AuthCardLayout from "./LoginLayout";
import AuthInput from "./AuthInput";
import Image from "next/image";

const PhoneLoginForm = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Call the parent callback (navigate to next step)
    onSuccess?.(data.phoneNumber);
  };

  return (
    <AuthCardLayout>
      <div className="flex flex-row justify-between max-h-[30px]">
        <button className="cursor-pointer flex flex-row-reverse gap-1 items-center">
          <p className="text-[#2E334266] text-[16px]">ورود با دسترسی سریع</p>
          <Image src="/icons/login.svg" width={24} height={24} alt="Login"></Image>
        </button>

        <button className="cursor-pointer">
          <Image width={42} height={42} src="/icons/loginClose.svg" alt="Close" />
        </button>
      </div>
      <Image src="/icons/exinIconWithoutHandsPurple.svg" width={70} height={140} alt="Exin" className="self-center"></Image>
      <p className="text-black font-normal text-[20px]">
        {" "}
        برای ورود به
        <span className="text-[#71416D] text-[20px] font-semibold"> اکسینا </span> شماره تلفن خود را وارد کنید .
      </p>
      <p className=" flex items-center rounded-[4px] bg-gradient-to-r from-[#3E243C] via-[#71416D] via-[45.5%] to-[#A45F9E] max-w-[300px] max-h-[42px] p-3 justify-center text-center text-white font-normal text-[14px]">
        کد تایید به تلفن همراه شما ارسال خواهد شد.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <AuthInput
          placeHolder={"شماره تلفن همراه"}
          {...register("phoneNumber", {
            required: "شماره تلفن اجباری است",
            pattern: {
              value: /^09\d{9}$/,
              message: "شماره تلفن معتبر نیست",
            },
          })}
          error={errors.phoneNumber?.message}
        ></AuthInput>
        <Button type="submit" className={"w-[280px] flex justify-center h-[70px] [&>*]:text-2xl justify-self-center"} text="ارسال کد"></Button>
      </form>
    </AuthCardLayout>
  );
};

export default PhoneLoginForm;
