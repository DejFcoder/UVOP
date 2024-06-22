import { Link } from "react-router-dom";
import Layout from "./Layout";

function SutaznyPodklad() {
  return (
    <Layout>
      <div className="flex flex-row justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">Zákazka #123456</h1>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-bold mb-3">Základné údaje</h2>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <div className="flex flex-col mb-7">
              <p className="mb-2">Internetova adresa (URL)</p>
              <input
                className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
                type="text" 
                placeholder="peto.remis@gmail.com"
              />
            </div>
            <div className="flex flex-col mb-7">
              <p className="mb-2">Manažér VO</p>
              <input
                className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
                type="text"
                placeholder="Adrian M"
              />
            </div>
            <div className="flex flex-col mb-7">
              <p className="mb-2">Datum vyhlasenia</p>
              <input
                className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
                type="text" placeholder="22.06.2025"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col mb-7">
              <p className="mb-2">Internetova adresa profilu (URL)</p>
              <input
                className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
                type="text" placeholder="peto.remis.com"
              />
            </div>
            <div className="flex flex-col mb-7">
              <p className="mb-2">Vecný gestor a jeho nadriadený</p>
              <input
                className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
                type="text" placeholder="Marian A"
              />
            </div>
            <div className="flex flex-col mb-7">
              <p className="mb-2">Osoba podla podpisoveho poriadku</p>
              <input
                className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
                type="text" placeholder="Peťo Remiš"
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-3">Informácie o zákazke</h2>
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <div className="flex flex-col mb-7">
            <p className="mb-2">Názov zákazky</p>
            <input
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              type="text" placeholder="Monitory v Bratislave"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">Stručný opis</p>
            <textarea
              rows={5}
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              name=""
              id="" placeholder="Keď si raz Peťo Remiš tak si raz Peťo Remiš a keď si Remiš Peťo tak si Šimer Oťep"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col mb-7">
            <p className="mb-2">Typ zákazky</p>
            <div className="relative flex flex-col">
            <input
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              type="text" placeholder="Obyčajna"
            />
            <i className='bx bx-chevron-down absolute right-24 bottom-3'></i>
            </div>
          </div>
          <div className="flex flex-col mb-7 relative">
            <p className="mb-2">CPV kód (hlavný predmet)</p>
            <input
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              type="text" placeholder="00011111"
            />
            <i className='bx bx-chevron-down absolute right-24 bottom-3'></i>
          </div>
          <div className="flex flex-col mb-7 relative">
            <p className="mb-2">CPV kód z (doplňujúci predmet)</p>
            <input
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              type="text" placeholder="00002222"
            />
            <i className='bx bx-chevron-down absolute bottom-3 right-24'></i>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 mb-20">
        <div className="flex flex-col">
          <p className="mb-2">Predpokladaná hodnota zákazky</p>
          <input
            className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
            type="text" placeholder="300"
          />
        </div>
        <div className="flex flex-col">
          <p className="mb-2">Lehota viazanosti ponuky</p>
          <input
            className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
            type="text" placeholder="30"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold my-3">Identifikácia obstarávateľa</h2>
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <div className="flex flex-col mb-7">
            <p className="mb-2">Obchodné meno</p>
            <input
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              type="text" placeholder="Peťo"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">Sídlo</p>
            <input
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              type="text" placeholder="Bratislava"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">
              Osoba splnomocnená na podpisovanie ponuky (nepovinný)
            </p>
            <input
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              type="text"placeholder="Peťo Remiš"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">Bankové spojenie</p>
            <input
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              type="text"placeholder="3092054923095023950235092"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">Telefónne číslo</p>
            <input
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              type="text" placeholder="+421 930 045 921 059 30"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col mb-7">
            <p className="mb-2">Právna forma</p>
            <input
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              type="text" placeholder="Oťep Šimer"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">Štatutárny orgán</p>
            <input
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              type="text"placeholder="Bratislava"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">IČO</p>
            <input
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              type="text" placeholder="139 490 237 598 234"
            />
          </div>
          <div className="flex flex-col mb-7">
            <p className="mb-2">Email</p>
            <input
              className="border-2 border-black rounded max-w-lg p-2 placeholder-black"
              type="text" placeholder="peto.remis@gmail.com"
            />
          </div>
        </div>
      </div>

      <div className="w-2/4 mx-auto flex justify-around items-center mt-10">
        <Link
          to="/register"
          className="text-md bg-blue-600 text-white py-4 px-5 rounded-xl"
        >
          <div className="flex items-center">
            <p className="mr-4">Stiahnuť zmluvy</p>
            <i className="bx bx-chevron-down text-2xl"></i>
          </div>
        </Link>

        <Link
          to="/register"
          className="text-md bg-blue-600 text-white py-2 px-5 rounded-xl max-w-52"
        >
          <div className="flex items-center">
            <p className="mr-4">Stiahnuť súťažné podklady</p>
            <i className="bx bx-chevron-down text-2xl"></i>
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export default SutaznyPodklad;
