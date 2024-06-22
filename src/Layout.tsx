import React, { ReactNode } from 'react';
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
