import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";
import SearchInput from "./SearchInput";

function RegisterDat() {
  const [showFilter, setShowFilter] = useState(false);

  const handleSearchClick = () => {
    setShowFilter(true);
  };

  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-5">Register podkladov</h1>
      <div onClick={handleSearchClick}>
        <SearchInput />
      </div>

      <div className="lg:grid items-center lg:grid-cols-7 flex flex-col mb-8 w-full p-2 rounded-lg bg-blue-800 text-white">
        <span className="text-lg font-regular text-center">ID</span>
        <span className="text-lg font-regular text-center">Názov</span>
        <span className="text-lg font-regular text-center">CPV</span>
        <span className="text-lg font-regular text-center">Dátum</span>
        <span className="text-lg font-regular text-center">Vytvoril</span>
        <span className="text-lg font-regular text-center">Audit</span>
        <span className="text-lg font-regular text-center"></span>
      </div>

      <Link
        to="/sutazny-podklad"
        className="lg:grid items-center lg:grid-cols-7 flex flex-col mt-4 border-2 border-black rounded-lg p-4 gap-4 font-medium hover:bg-blue-200 transition-all duration-200 ease-linear"
      >
        <span className="text-center">123456</span>
        <span className="text-center">
          Sutaz o obstaravani traktorov v meste Bratislava 2023
        </span>
        <span className="text-center">03000000-1</span>
        <span className="text-center">12.12.2034</span>
        <span className="text-center">Mestky urad Bratislava</span>
        <span className="text-center text-green-700">Skontrolovane 21.02.2035</span>
        <span className="flex justify-center items-center">
          <i className="bx bx-file text-3xl"></i>
        </span>
      </Link>
      <Link
        to="/sutazny-podklad"
        className="lg:grid items-center lg:grid-cols-7 flex flex-col mt-4 border-2 border-black rounded-lg p-4 gap-4 font-medium hover:bg-blue-200 transition-all duration-200 ease-linear"
      >
        <span className="text-center">123456</span>
        <span className="text-center">
          Sutaz o obstaravani traktorov v meste Bratislava 2023
        </span>
        <span className="text-center">03000000-1</span>
        <span className="text-center">12.12.2034</span>
        <span className="text-center">Mestky urad Bratislava</span>
        <span className="text-center">Skontrolovane 21.02.2035</span>
        <span className="flex justify-center items-center">
          <i className="bx bx-file text-3xl"></i>
        </span>
      </Link>
      <Link
        to="/sutazny-podklad"
        className="lg:grid items-center lg:grid-cols-7 flex flex-col mt-4 border-2 border-black rounded-lg p-4 gap-4 font-medium hover:bg-blue-200 transition-all duration-200 ease-linear"
      >
        <span className="text-center">123456</span>
        <span className="text-center">
          Sutaz o obstaravani traktorov v meste Bratislava 2023
        </span>
        <span className="text-center">03000000-1</span>
        <span className="text-center">12.12.2034</span>
        <span className="text-center">Mestky urad Bratislava</span>
        <span className="text-center text-4xl">-</span>
        <span className="flex justify-center items-center">
          <i className="bx bx-file text-3xl"></i>
        </span>
      </Link>
      <Link
        to="/sutazny-podklad"
        className="lg:grid items-center lg:grid-cols-7 flex flex-col mt-4 border-2 border-black rounded-lg p-4 gap-4 font-medium hover:bg-blue-200 transition-all duration-200 ease-linear"
      >
        <span className="text-center">123456</span>
        <span className="text-center">
          Sutaz o obstaravani traktorov v meste Bratislava 2023
        </span>
        <span className="text-center">03000000-1</span>
        <span className="text-center">12.12.2034</span>
        <span className="text-center">Mestky urad Bratislava</span>
        <span className="text-center">Skontrolovane 21.02.2035</span>
        <span className="flex justify-center items-center">
          <i className="bx bx-file text-3xl"></i>
        </span>
      </Link>
      <Link
        to="/sutazny-podklad"
        className="lg:grid items-center lg:grid-cols-7 flex flex-col mt-4 border-2 border-black rounded-lg p-4 gap-4 font-medium hover:bg-blue-200 transition-all duration-200 ease-linear"
      >
        <span className="text-center">123456</span>
        <span className="text-center">
          Sutaz o obstaravani traktorov v meste Bratislava 2023
        </span>
        <span className="text-center">03000000-1</span>
        <span className="text-center">12.12.2034</span>
        <span className="text-center">Mestky urad Bratislava</span>
        <span className="text-center text-4xl">-</span>
        <span className="flex justify-center items-center">
          <i className="bx bx-file text-3xl"></i>
        </span>
      </Link>
      <Link
        to="/sutazny-podklad"
        className="lg:grid items-center lg:grid-cols-7 flex flex-col mt-4 border-2 border-black rounded-lg p-4 gap-4 font-medium hover:bg-blue-200 transition-all duration-200 ease-linear"
      >
        <span className="text-center">123456</span>
        <span className="text-center">
          Sutaz o obstaravani traktorov v meste Bratislava 2023
        </span>
        <span className="text-center">03000000-1</span>
        <span className="text-center">12.12.2034</span>
        <span className="text-center">Mestky urad Bratislava</span>
        <span className="text-center">Skontrolovane 21.02.2035</span>
        <span className="flex justify-center items-center">
          <i className="bx bx-file text-3xl"></i>
        </span>
      </Link>
      <Link
        to="/sutazny-podklad"
        className="lg:grid items-center lg:grid-cols-7 flex flex-col mt-4 border-2 border-black rounded-lg p-4 gap-4 font-medium hover:bg-blue-200 transition-all duration-200 ease-linear"
      >
        <span className="text-center">123456</span>
        <span className="text-center">
          Sutaz o obstaravani traktorov v meste Bratislava 2023
        </span>
        <span className="text-center">03000000-1</span>
        <span className="text-center">12.12.2034</span>
        <span className="text-center">Mestky urad Bratislava</span>
        <span className="text-center">Skontrolovane 21.02.2035</span>
        <span className="flex justify-center items-center">
          <i className="bx bx-file text-3xl"></i>
        </span>
      </Link>

      {showFilter && (
        <div className="fixed top-0 right-0 bg-zinc-100 h-screen flex flex-col p-10 border-l-2 border-l-black">
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold mb-5">Filtre</h1>
            <i
              className="bx bx-x text-5xl cursor-pointer"
              onClick={handleCloseFilter}
            ></i>
          </div>
          <div className="mb-3">
            <p className="mb-2 font-medium">CPV</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
          <div className="mb-3">
            <p className="mb-2 font-medium">Lokalita</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
          <div className="mb-5">
            <p className="mb-2 font-medium">Dátum vyhotovenia</p>
            <div className="flex justify-between gap-5">
              <input
                className="border-2 border-black rounded w-20 py-1"
                type="text"
              />
              <input
                className="border-2 border-black rounded w-20 py-1"
                type="text"
              />
              <input
                className="border-2 border-black rounded w-20 py-1"
                type="text"
              />
            </div>
          </div>
          <div className="flex mb-3">
            <input
              type="text"
              className="w-8 h-8 border-2 border-black rounded-lg mr-4"
            />{" "}
            <p className="font-medium">Auditované</p>
          </div>
          <div className="flex mb-10">
            <input
              type="text"
              className="w-8 h-8 border-2 border-black rounded-lg mr-4"
            />
            <p className="font-medium">Platné podľa legislatívy</p>
          </div>
          <div className="flex justify-between gap-5">
            <button className="font-medium border-2 rounded-md p-2 border-red-600 text-red-600 hover:text-white hover:bg-red-600 transition-all duration-200 ease-linear">
              Odstrániť Filtre
            </button>
            <button className="font-medium border-2 rounded-md p-2 text-blue-800 border-blue-800 hover:text-white hover:bg-blue-800 transition-all duration-200 ease-linear">
              Aplikovať Filtre
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default RegisterDat;
