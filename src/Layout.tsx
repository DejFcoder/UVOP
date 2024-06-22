import React, { ReactNode } from 'react';
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 rounded-lg">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;