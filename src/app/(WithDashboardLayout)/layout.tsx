import Sidebar from "@/components/shared/Sidebar/Sidebar";
import React from "react";

const WithDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div className="min-h-screen">{children}</div>
    </div>
  );
};

export default WithDashboardLayout;
