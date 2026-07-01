"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const inputesField = [
    { name: "نام و نام خانوادگی", type: "text", title: "FullName" },
    { name: "شماره تماس", type: "text", title: "Phone No", required: true },
    { name: "ایمیل", type: "text", title: "Email", required: true },
    { name: "رمز عبور", type: "text", title: "Password" },
  ];
  const selectBoxFields = [
    {
      name: "نوع کسب کار",
      title: "Jobs",
      options: [
        { id: 1, name: "خدماتی" },
        { id: 2, name: "تولیدی" },
        { id: 3, name: "اینترنتی" },
        { id: 4, name: "خانگی" },
      ],
    },
    {
      name: "سمت شغلی",
      title: "Positions",
      options: [
        { id: 1, name: "مدیر تولید" },
        { id: 2, name: "مدیر عامل" },
        { id: 3, name: "مدیر فنی" },
        { id: 4, name: "کارشناس IT" },
      ],
    },
    {
      name: "حوزه فعالیت",
      title: "Field of activity",
      options: [
        { id: 1, name: "فروش پوشاک" },
        { id: 2, name: "تولید و خدمات" },
        { id: 3, name: "عمده فروشی" },
        { id: 4, name: "سایر" },
      ],
    },
    {
      name: "چطور با ما آشنا شدید؟",
      title: "Meet",
      options: [
        { id: 1, name: "پیج اینیستاگرام" },
        { id: 2, name: "تبلیغات اینتر نتی" },
        { id: 3, name: "آشنایان و دوستان" },
        { id: 4, name: "سایر" },
      ],
    },
  ];

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-1  w-full md:w-3/4 my-4 h-full gap-4 md:grid-cols-2 place-content-center place-items-center">
        {inputesField.map((item) => (
          <CustomInput key={item.title} name={item.name} type={item.type} {...item} />
        ))}
        {selectBoxFields.map((item) => (
          <CustomSelextBox name={item.name} options={item.options} key={item.title} />
        ))}
      </div>
      <Button className="p-4 my-4 col-span-1 text-2xl  self-center">ثبت نام</Button>
    </form>
  );
}

const CustomInput = ({ name, type, ...props }) => {
  console.log(props.required);
  return (
    <div className="flex   w-full flex-col justify-start items-start gap-1">
      <label className={`mr-2 text-lg ${props.required && "font-bold"}`}>
        {name}
        {props.required ? "*" : ""}:
      </label>
      <input className="w-full p-2.5 rounded-lg outline-none focus:outline-none border border-[#d5d5d5]" type={type} {...props} />
    </div>
  );
};

const CustomSelextBox = ({ name, options }) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="flex   w-full flex-col justify-start items-start gap-1">
      <label className={`mr-2 text-lg `}>{name}:</label>
      <Listbox as={"div"} className="w-full rounded-lg outline-none focus:outline-none border border-[#d5d5d5]" value={selected} onChange={setSelected}>
        <ListboxButton className="w-full p-2.5 rounded-lg outline-none focus:outline-none border border-[#d5d5d5]"> {selected.name}</ListboxButton>
        <ListboxOptions anchor="bottom">
          {options.map((option) => (
            <ListboxOption key={option.id} value={option} className="data-focus:bg-blue-100">
              {option.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default SignupForm;
