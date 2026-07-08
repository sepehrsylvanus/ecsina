"use client";

import Link from "next/link";

function ActionGrid({ items, activeId, onItemClick, className = "" }) {
  return (
    <div className={`px-4 md:px-8 mt-6 md:mt-10 ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;
          const isDisabled = item.disabled;

          const content = (
            <>
              <span
                className={`font-bold text-sm md:text-lg ${
                  isActive
                    ? "text-primary-7"
                    : isDisabled
                      ? "text-gray-400"
                      : "text-black"
                }`}
              >
                {item.title || item.label}
              </span>
              <Icon
                className={`w-6 h-6 md:w-7 md:h-7 ${
                  isActive ? "text-primary-7" : "text-primary-7"
                }`}
              />
            </>
          );

          const cardClassName = `rounded-2xl md:rounded-3xl px-4 py-6 md:py-8 shadow-sm transition-all duration-200 flex items-center justify-center gap-3 ${
            isDisabled
              ? "bg-gray-100 opacity-60 cursor-not-allowed"
              : "hover:shadow-md cursor-pointer hover:-translate-y-1"
          } ${
            isActive && !isDisabled
              ? "bg-primary-0 border-2 border-primary-7"
              : "bg-white"
          }`;

          if (isDisabled) {
            return (
              <div key={item.id} className={cardClassName}>
                {content}
              </div>
            );
          }

          if (onItemClick) {
            return (
              <button
                key={item.id}
                onClick={() => onItemClick(item)}
                className={cardClassName}
              >
                {content}
              </button>
            );
          }

          if (item.href) {
            return (
              <Link key={item.id} href={item.href} className={cardClassName}>
                {content}
              </Link>
            );
          }

          return (
            <div key={item.id} className={cardClassName}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActionGrid;
