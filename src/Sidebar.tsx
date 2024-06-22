import { Link } from "react-router-dom";
import Logo from "./images/logo.png";

function Sidebar() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <a
          href="https://flowbite.com/"
          className="flex items-center ps-2.5 mb-5"
        >
          <img src={Logo} className="w-52" alt="Flowbite Logo" />
        </a>
        <ul className="space-y-2 font-medium">
          <li className="flex flex-row items-center">
            <Link
              to="/"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <i className="bx bx-cog text-2xl"></i>
              <span className="ms-3">Vytvoriť zákazku</span>
            </Link>
          </li>
          <li className="flex flex-row items-center">
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
              <svg
                width="20"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2C22 3.1 21.1 4 20 4C19.82 4 19.65 3.98 19.49 3.93L15.93 7.48C15.98 7.64 16 7.82 16 8C16 9.1 15.1 10 14 10C12.9 10 12 9.1 12 8C12 7.82 12.02 7.64 12.07 7.48L9.52 4.93C9.36 4.98 9.18 5 9 5C8.82 5 8.64 4.98 8.48 4.93L3.93 9.49C3.98 9.65 4 9.82 4 10C4 11.1 3.1 12 2 12C0.9 12 0 11.1 0 10C0 8.9 0.9 8 2 8C2.18 8 2.35 8.02 2.51 8.07L7.07 3.52C7.02 3.36 7 3.18 7 3C7 1.9 7.9 1 9 1C10.1 1 11 1.9 11 3C11 3.18 10.98 3.36 10.93 3.52L13.48 6.07C13.64 6.02 13.82 6 14 6C14.18 6 14.36 6.02 14.52 6.07L18.07 2.51C18.02 2.35 18 2.18 18 2C18 0.9 18.9 0 20 0C21.1 0 22 0.9 22 2Z"
                  fill="#0B4199"
                />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap text-blue-700">DashBoard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9161 16.5042L19.9174 16.5049C20.9833 17.0485 21.6447 18.1515 21.6447 19.3693V22.294H1.05646V19.3693C1.05646 18.1515 1.71786 17.0485 2.78373 16.5049L2.78507 16.5042C5.04291 15.3484 7.96515 14.4117 11.3506 14.4117C14.736 14.4117 17.6582 15.3484 19.9161 16.5042ZM15.9976 6.35287C15.9976 8.92058 13.9183 10.9999 11.3506 10.9999C8.78286 10.9999 6.70352 8.92058 6.70352 6.35287C6.70352 3.78515 8.78286 1.70581 11.3506 1.70581C13.9183 1.70581 15.9976 3.78515 15.9976 6.35287Z"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap">Profil</span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Nastavenia</span>
            </a>
          </li>
          <li>
            <Link
              to="/login"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">
                Prihlásiť sa
              </span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">
                Zaregistrovať sa
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
