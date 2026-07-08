// components/dashboard/TrashList.jsx
"use client";

import { useState } from "react";
import TrashRow from "./TrashRow";

const mockTrashItems = [
  {
    id: 1,
    title: "بیزنس مدل تجاری",
    size: "9mg",
    deletedDate: "14 اردیبهشت ، 1404",
  },
  {
    id: 2,
    title: "بیزنس مدل تجاری",
    size: "9mg",
    deletedDate: "14 اردیبهشت ، 1404",
  },
  {
    id: 3,
    title: "بیزنس مدل تجاری",
    size: "9mg",
    deletedDate: "14 اردیبهشت ، 1404",
  },
];

function TrashList() {
  const [items, setItems] = useState(mockTrashItems);

  const handleRestore = (id) => {
    // منطق بازیابی
    console.log("Restore:", id);
  };

  const handleDelete = (id) => {
    // حذف دائمی
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="px-4 md:px-8 mt-10 md:mt-14">
      {/* Title */}
      <h2 className="text-center text-black text-xl md:text-2xl font-bold mb-8">
        حذف موقت
      </h2>

      {/* Empty state */}
      {items.length === 0 ? (
        <div className="text-center text-gray-400 py-16">
          <p>سطل زباله خالی است</p>
        </div>
      ) : (
        <div className="space-y-4 md:space-y-5">
          {items.map((item) => (
            <TrashRow
              key={item.id}
              item={item}
              onRestore={handleRestore}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TrashList;
