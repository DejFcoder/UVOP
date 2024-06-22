import { Link } from "react-router-dom";
import Layout from "./Layout";
import SearchInput from "./SearchInput";

function RegisterDat() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-5">Register podkladov</h1>
      <SearchInput />

      <div className="grid items-center grid-cols-7 mb-8 w-full p-2 rounded-lg bg-blue-800 text-white">
        <span className="text-lg font-regular text-center">ID</span>
        <span className="text-lg font-regular text-center">Názov</span>
        <span className="text-lg font-regular text-center">CPV</span>
        <span className="text-lg font-regular text-center">Dátum</span>
        <span className="text-lg font-regular text-center">Vytvoril</span>
        <span className="text-lg font-regular text-center">Audit</span>
        <span className="text-lg font-regular text-center"></span>
      </div>

      {Array(8)
        .fill(0)
        .map((_, index) => (
          <Link
            to="/sutazny-podklad"
            className="grid items-center grid-cols-7 mt-4 border-2 border-black rounded-lg p-4 gap-4 font-medium"
            key={index}
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
        ))}

      <div className="absolute bg-red-600 flex flex-col p-10">
        <div className="flex flex-row justify-between">
          <h1>Filtre</h1>
          <i className="bx bx-x"></i>
        </div>
        <div>
          <p className="mb-2">CPV</p>
          <input
            className="border-2 border-black rounded max-w-lg py-1"
            type="text"
          />
        </div>
        <div>
          <p className="mb-2">Lokalita</p>
          <input
            className="border-2 border-black rounded max-w-lg py-1"
            type="text"
          />
        </div>
        <div>
          <p className="mb-2">Dátum vyhotovenia</p>
          <div className="flex justify-between gap-5">
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
        </div>
        <div><input type="text" /> <p>Auditované</p></div>
        <div><input type="text" /> <p>Platné podľa legislatívy</p></div>
      </div>
    </Layout>
  );
}

export default RegisterDat;
