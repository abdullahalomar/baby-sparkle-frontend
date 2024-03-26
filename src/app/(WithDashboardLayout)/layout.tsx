/* eslint-disable react/no-children-prop */
import Sidebar from "@/components/shared/Sidebar/Sidebar";
import React, { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Sidebar children={undefined} />
      <div className="min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
