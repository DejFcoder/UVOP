import { Link } from "react-router-dom";
import Logo from "./images/logo.png";

function Sidebar() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen border-r-2"
      aria-label="Sidebar"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 flex flex-col">
        <a
          href="https://flowbite.com/"
          className="flex items-center ps-2.5 mb-5"
        >
          <img src={Logo} className="w-52" alt="Flowbite Logo" />
        </a>
        <div className="flex-1">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <i className="bx bx-plus-circle text-2xl"></i>
                <span className="ms-3 ">Vytvoriť zákazku</span>
              </Link>
            </li>
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
                <svg
                  width="23"
                  height="12"
                  viewBox="0 0 23 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.1172 2C22.1172 3.1 21.2172 4 20.1172 4C19.9372 4 19.7672 3.98 19.6072 3.93L16.0472 7.48C16.0972 7.64 16.1172 7.82 16.1172 8C16.1172 9.1 15.2172 10 14.1172 10C13.0172 10 12.1172 9.1 12.1172 8C12.1172 7.82 12.1372 7.64 12.1872 7.48L9.63719 4.93C9.47719 4.98 9.29719 5 9.11719 5C8.93719 5 8.75719 4.98 8.59719 4.93L4.04719 9.49C4.09719 9.65 4.11719 9.82 4.11719 10C4.11719 11.1 3.21719 12 2.11719 12C1.01719 12 0.117188 11.1 0.117188 10C0.117188 8.9 1.01719 8 2.11719 8C2.29719 8 2.46719 8.02 2.62719 8.07L7.18719 3.52C7.13719 3.36 7.11719 3.18 7.11719 3C7.11719 1.9 8.01719 1 9.11719 1C10.2172 1 11.1172 1.9 11.1172 3C11.1172 3.18 11.0972 3.36 11.0472 3.52L13.5972 6.07C13.7572 6.02 13.9372 6 14.1172 6C14.2972 6 14.4772 6.02 14.6372 6.07L18.1872 2.51C18.1372 2.35 18.1172 2.18 18.1172 2C18.1172 0.9 19.0172 0 20.1172 0C21.2172 0 22.1172 0.9 22.1172 2Z"
                    fill="black"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">DashBoard</span>
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
                    strokeWidth="2"
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
                <i className="bx bx-cog text-2xl"></i>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Nastavenia
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/login"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3535 7L9.95352 8.4L12.5535 11H2.35352V13H12.5535L9.95352 15.6L11.3535 17L16.3535 12L11.3535 7ZM20.3535 19H12.3535V21H20.3535C21.4535 21 22.3535 20.1 22.3535 19V5C22.3535 3.9 21.4535 3 20.3535 3H12.3535V5H20.3535V19Z"
                    fill="black"
                  />
                </svg>

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
      </div>
    </aside>
  );
}

export default Sidebar;
