"use client";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

const faqTabs = [
  { id: 1, title: "سوالات متداول" },
  { id: 2, title: "راهنمای دانلود قالب" },
];

const faqData = [
  {
    id: 1,
    question: "سوال اول",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 2,
    question: "سوال دوم",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    id: 3,
    question: "سوال سوم",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
];

const FaqAccordion = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="border border-primary-7 rounded-2xl md:rounded-3xl bg-white overflow-hidden shadow-sm">
      {/* Tabs Header */}
      <div className="bg-primary-0 flex">
        {faqTabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 md:px-8 py-3 md:py-4 text-xs md:text-base font-semibold cursor-pointer transition-all duration-300 ${
              index === 0 ? "rounded-tr-2xl md:rounded-tr-3xl" : ""
            } ${
              activeTab === tab.id
                ? "bg-primary-8 text-white"
                : "bg-transparent text-primary-7"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Accordion Body */}
      <div className="p-4 md:p-8 space-y-4">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="bg-primary-0 rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full flex items-center justify-between p-4 cursor-pointer"
            >
              <span className="text-primary-8 font-semibold text-sm md:text-base">
                {item.question}
              </span>
              {openId === item.id ? (
                <IoIosArrowDown className="w-5 h-5 text-primary-7" />
              ) : (
                <IoIosArrowBack className="w-5 h-5 text-primary-7" />
              )}
            </button>
            {openId === item.id && (
              <div className="px-4 pb-4 border-t border-primary-7/20">
                <p className="text-gray-700 text-sm md:text-base leading-7 pt-3 text-right">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
