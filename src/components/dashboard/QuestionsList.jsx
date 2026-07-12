"use client";

function QuestionsList() {
  // Sample data - replace with actual data from API
  const tickets = [
    {
      id: "#1245",
      subject: "ویرایش اطلاعات",
      status: "pending",
      statusLabel: "انتظار",
      date: "1403/02/14",
    },
    {
      id: "#1245",
      subject: "ویرایش اطلاعات",
      status: "review",
      statusLabel: "درحال بررسی",
      date: "1403/02/14",
    },
    {
      id: "#1245",
      subject: "ویرایش اطلاعات",
      status: "completed",
      statusLabel: "انتمام",
      date: "1403/02/14",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "text-yellow-600";
      case "review":
        return "text-green-600";
      case "completed":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-black mb-10">
        لیست تیکت ها
      </h1>

      {/* Table Container */}
      <div className="bg-white rounded-lg">
        {/* Table Header */}
        <div className="bg-primary-7 text-white rounded-t-lg">
          <div className="grid grid-cols-4 gap-4 px-6 py-4">
            <div className="text-center font-semibold">شماره تیکت</div>
            <div className="text-center font-semibold">عنوان</div>
            <div className="text-center font-semibold">تاریخ ارسال</div>
            <div className="text-center font-semibold">وضعیت</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 px-6 py-5 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {/* Ticket Number */}
              <div className="text-center font-semibold text-black">
                {ticket.id}
              </div>

              {/* Subject */}
              <div className="text-center text-black">{ticket.subject}</div>

              {/* Date */}
              <div className="text-center text-black">{ticket.date}</div>

              {/* Status */}
              <div
                className={`text-center font-medium ${getStatusColor(ticket.status)}`}
              >
                {ticket.statusLabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Ticket Button */}
      <div className="flex justify-center mt-10">
        <a
          href="/user/archive/new"
          className="inline-flex items-center gap-2 bg-primary-7 hover:bg-primary-8 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
        >
          <span className="text-xl">+</span>
          <span>تیکت جدید</span>
        </a>
      </div>
    </div>
  );
}

export default QuestionsList;
