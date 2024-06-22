import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile Menu Icon */}
      <div className="sm:hidden p-4">
        <button onClick={toggleSidebar}>
          <i className="bx bx-menu text-2xl"></i>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen border-r-2 bg-gray-50 flex flex-col transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <a href="#" className="flex items-center ps-2.5 mb-5">
            <img src={Logo} className="w-40" alt="Logo" />
          </a>
          <ul className="space-y-2 font-medium">
            <li className="mb-4">
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg group"
              >
                <span className="bg-blue-800 flex items-center px-2 py-1 rounded-lg text-white">
                  <i className="bx bx-plus-circle text-2xl"></i>
                  <span className="ms-3">Vytvoriť zákazku</span>
                </span>
              </Link>
            </li>
            <div className="border-2"></div>
            <li>
              <Link
                to="/register"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <i className="bx bx-data text-2xl"></i>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Register dát
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <i className="bx bx-chart text-2xl"></i>
                <span className="flex-1 ms-3 whitespace-nowrap">DashBoard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <i className="bx bx-user text-2xl"></i>
                <span className="flex-1 ms-3 whitespace-nowrap">Profil</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <i className="bx bx-cog text-2xl"></i>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Nastavenia
                </span>
              </a>
            </li>
          </ul>
          <ul className="mt-auto space-y-2 font-medium">
            <li>
              <Link
                to="/login"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <i className="bx bx-log-out text-2xl"></i>
                <span className="flex-1 ms-3 whitespace-nowrap text-red-600">
                  Odhlásiť sa
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
