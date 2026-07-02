import Image from "next/image";

const CreateComment = () => {
  return (
    <div className="container mx-auto px-4 mt-16 md:mt-24">
      <div className="shadow-lg rounded-2xl py-6 md:py-10 px-4 md:px-12 bg-white">
        {/* TITLE */}
        <div className="flex items-center justify-start">
          <h3 className="text-lg md:text-3xl font-bold text-black border-b-4 pb-2 border-primary-7 inline-block">
            ثبت نظر جدید
          </h3>
        </div>

        {/* USER INFO */}
        <div className="flex items-center gap-3 md:gap-4 mt-6 flex-row-reverse justify-end">
          <p className="text-black text-base md:text-2xl font-bold">
            نام کاربری
          </p>
          <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-200 overflow-hidden">
            {/* Placeholder circle */}
          </div>
        </div>

        {/* TEXT AREA */}
        <div className="mt-6">
          <div className="bg-primary-0 rounded-2xl p-4">
            <textarea
              className="w-full p-3 bg-transparent border-none focus:outline-none resize-none text-sm md:text-base placeholder:text-gray-500 text-right"
              rows="6"
              placeholder="نظر خود را بنویسید..."
              dir="rtl"
            />
          </div>

          <button className="w-full mt-5 border-2 border-primary-7 rounded-2xl py-3 md:py-4 text-primary-7 font-semibold text-base md:text-xl cursor-pointer hover:bg-primary-7/5 transition-all duration-300">
            ارسال پیام
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateComment;
