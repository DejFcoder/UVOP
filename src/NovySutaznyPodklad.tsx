import { Link } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import { useState } from "react";
function RegisterDat() {
  const API_URL = "http://127.0.0.1:5000/";

  const askAssistant = (productName: string) => {
    return axios.post(`${API_URL}/ask_assistant`, {
      product_name: productName,
    });
  };

  const [nazov, setNazov] = useState("");
  const [cpv, setCpv] = useState("");
  const handleAskAssistant = async () => {
    try {
      const response = await askAssistant(nazov);
      setCpv(response.data.cpv_code);
    } catch (error) {
      console.error("Error asking assistant:", error);
    }
  };
  return (
    <Layout>
      <div className="flex flex-row justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">Nová zákazka</h1>
        <button className="border-2 border-red-600 hover:bg-red-600 py-2  px-3 text-red-600 hover:text-white font-medium rounded-lg transition-all duration-200 ease-linear">
          Zmazať
        </button>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-bold mb-3">Základy údaje</h2>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <div className="flex flex-col mb-7">
              <p className="mb-2">Internetova adresa (URL)</p>
              <input
                className="border-2 border-black rounded max-w-lg py-1"
                type="text"
              />
            </div>
            <div className="flex flex-col mb-7">
              <p className="mb-2">Manažér VO</p>
              <input
                className="border-2 border-black rounded max-w-lg py-1"
                type="text"
              />
            </div>
            <div className="flex flex-col mb-7">
              <p className="mb-2">Datum vyhlasenia</p>
              <input
                className="border-2 border-black rounded max-w-lg py-1"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col mb-7">
              <p className="mb-2">Internetova adresa profilu (URL)</p>
              <input
                className="border-2 border-black rounded max-w-lg py-1"
                type="text"
              />
            </div>
            <div className="flex flex-col mb-7">
              <p className="mb-2">Vecný gestor a jeho nadriadený</p>
              <input
                className="border-2 border-black rounded max-w-lg py-1"
                type="text"
              />
            </div>
            <div className="flex flex-col mb-7">
              <p className="mb-2">Osoba podla podpisoveho poriadku</p>
              <input
                className="border-2 border-black rounded max-w-lg py-1"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-3">Informácie o zákazke</h2>
      <div className="grid grid-cols-2 mb-5">
        <div className="flex flex-col">
          <div className="flex flex-col mb-7">
            <p className="mb-2">Názov zákazky</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
              value={nazov}
              onChange={(event) => setNazov(event.target.value)}
              onBlur={() => {
                if (nazov != "") {
                  handleAskAssistant();
                }
              }}
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">Stručný opis</p>
            <textarea
              rows={5}
              className="border-2 border-black rounded max-w-lg py-1"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col mb-7">
            <p className="mb-2">Typ zákazky</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">CPV kód (hlavný predmet)</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
              value={cpv}
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">CPV kód z (doplňujúci predmet)</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-24 bg-blue-100 flex flex-row items-center px-5 text-blue-500 mb-8">
        <i className="bx bxs-info-circle text-4xl"></i>
        <div className="w-9/12 h-full my-0 mx-auto flex flex-col justify-center">
          <p className="text-blue-700">
            Tento text slúži iba ako{" "}
            <span className="font-semibold">ukážka naplneného obsahu</span> v
            danom komponente. Nepoužívať pri implementácii a dizajne.
          </p>
          <a
            className="hover:underline hover:text-blue-700 text-blue-600"
            href=""
          >
            Toto je ukážka hypertextového linku.
          </a>
        </div>
        <i className="bx bx-x text-5xl"></i>
      </div>

      <div className="grid grid-cols-2 mb-20">
        <div className="flex flex-col">
          <p className="mb-2">Predpokladaná hodnota zákazky</p>
          <input
            className="border-2 border-black rounded max-w-lg py-1"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <p className="mb-2">Lehota viazanosti ponuky</p>
          <input
            className="border-2 border-black rounded max-w-lg py-1"
            type="text"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold my-3">Identifikácia obstarávateľa</h2>
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <div className="flex flex-col mb-7">
            <p className="mb-2">Obchodné meno</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">Sídlo</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">
              Osoba splnomocnená na podpisovanie ponuky (nepovinný)
            </p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">Bankové spojenie</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">Telefónne číslo</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col mb-7">
            <p className="mb-2">Právna forma</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">Štatutárny orgán</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">IČO</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">Email</p>
            <input
              className="border-2 border-black rounded max-w-lg py-1"
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-10">
        <Link to="/" className="text-xl bg-blue-600 text-white py-4 px-10 rounded-xl">Uložiť</Link>
      </div>
    </Layout>
  );
}

export default RegisterDat;
