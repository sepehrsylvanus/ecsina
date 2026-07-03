import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

function UserLayout({ children }) {
  return (
    <body lang="fa" dir="rtl">
      <DashboardHeader />
      {children}
    </body>
  );
}

export default UserLayout;
