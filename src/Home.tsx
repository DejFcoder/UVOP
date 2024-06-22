import { Link } from "react-router-dom";
import Layout from "./Layout";

function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-3">Šablóny</h1>
      <div className="flex mt-6">
        <button className="text-lg font-medium text-white bg-blue-800 border-2 border-blue-800 rounded-3xl py-2 px-5   mr-8">
          Všetky
        </button>
        <button className="text-lg font-medium text-blue-800 border-2 border-blue-800 rounded-3xl py-2 px-8 mr-8">
          cat1
        </button>
        <button className="text-lg font-medium text-blue-800 border-2 border-blue-800 rounded-3xl py-2 px-8 mr-8">
          cat2
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10 mb-96">
        <div className="p-6 border-2 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Nadlimitná zákazka</h2>
          <p className="mb-3">Hodnota sa rovná alebo je vyššia ako ustanovený finančný limit.</p>
          <div className="relative">
            <input type="text" className="border-2 py-1 rounded border-gray-600 w-full" />
            <i className="bx bx-chevron-down absolute right-3 bottom-3"></i>
          </div>
          <div className="ml-3 mt-5">
            <Link to="/novy-sutazny-podklad" className="bg-blue-800 rounded-lg font-medium text-white py-2 px-3">
              Vytvoriť
            </Link>
          </div>
        </div>
        <div className="p-6 border-2 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Nadlimitná zákazka</h2>
          <p className="mb-3">Hodnota sa rovná alebo je vyššia ako ustanovený finančný limit.</p>
          <div className="relative">
            <input type="text" className="border-2 py-1 rounded border-gray-600 w-full" />
            <i className="bx bx-chevron-down absolute right-3 bottom-3"></i>
          </div>
          <div className="ml-3 mt-5">
            <Link to="/novy-sutazny-podklad" className="bg-blue-800 rounded-lg font-medium text-white py-2 px-3">
              Vytvoriť
            </Link>
          </div>
        </div>
        <div className="p-6 border-2 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Nadlimitná zákazka</h2>
          <p className="mb-3">Hodnota sa rovná alebo je vyššia ako ustanovený finančný limit.</p>
          <div className="relative">
            <input type="text" className="border-2 py-1 rounded border-gray-600 w-full" />
            <i className="bx bx-chevron-down absolute right-3 bottom-3"></i>
          </div>
          <div className="ml-3 mt-5">
            <Link to="/novy-sutazny-podklad" className="bg-blue-800 rounded-lg font-medium text-white py-2 px-3">
              Vytvoriť
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
