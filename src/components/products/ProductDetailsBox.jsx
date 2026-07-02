const detailsData = [
  { label: "نام فایل:", value: "" },
  { label: "حجم:", value: "100 کیلوبایت" },
  { label: "فرمت:", value: "word" },
  { label: "امکان ویرایش آنلاین:", value: "دارد" },
  { label: "آخرین بروزرسانی:", value: "14/02/1404" },
  { label: "تعداد صفحات:", value: "5" },
];

const ProductDetailsBox = () => {
  return (
    <div className="border border-primary-7 rounded-2xl md:rounded-3xl bg-white overflow-hidden shadow-sm h-full">
      {/* Header */}
      <div className="bg-primary-0 py-3 md:py-4 text-center">
        <h3 className="text-primary-8 font-bold text-base md:text-lg">
          جزئیات
        </h3>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 space-y-4">
        {detailsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-end gap-2 text-sm md:text-base"
          >
            {item.value && (
              <span className="text-black font-semibold">{item.value}</span>
            )}
            <span className="text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsBox;
