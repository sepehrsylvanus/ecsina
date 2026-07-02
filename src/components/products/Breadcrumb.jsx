"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const translationMap = {
  products: "محصولات",
  "biz-model": "بوم کسب و کار",
  canvas1: "اسم قالب",
};

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Mock segments if empty
  const segments =
    pathSegments.length > 0
      ? pathSegments
      : ["products", "biz-model", "canvas1"];

  let path = "";

  return (
    <div className="container mx-auto px-4 mt-4 md:mt-8">
      <div className="bg-primary-0 rounded-[10px] px-4 py-3 md:py-5">
        <div className="text-primary-7 text-sm md:text-base flex flex-wrap items-center justify-end">
          <Link href="/" className="hover:underline">
            خانه
          </Link>
          {segments.map((segment, index) => {
            path += `/${segment}`;
            const isLast = index === segments.length - 1;
            const translated =
              translationMap[segment] ||
              decodeURIComponent(segment.replace(/-/g, " "));

            return (
              <Fragment key={path}>
                <span className="px-2">/</span>
                {isLast ? (
                  <span className="text-primary-8 font-semibold">
                    {translated}
                  </span>
                ) : (
                  <Link href={path} className="hover:underline text-primary-7">
                    {translated}
                  </Link>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
