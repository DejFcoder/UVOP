import Layout from "./Layout";
import Img from "./images/Frame 50.png"
import GrafImg from "./images/graf.png"

function DashBoard() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-7">DashBoard</h1>
      <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-2 flex flex-col gap-4">
        <div className="p-5 border-2 rounded-lg">
          <div className="flex flex-row justify-between items-center mb-2">
            <h2 className="text-xl font-medium ">Hodnota Tenderu</h2>
            <i className="bx bx-dots-horizontal-rounded"></i>
          </div>
          <div className="w-full border-2 mb-5"></div>
          <p className="text-sm font-medium text-gray-500">Avg. hodnota tenderu  za celý čas</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-3xl font-medium">35600€</p>
            <img src={Img} width={85} alt="" />
          </div>
        </div>
        <div className="p-5 border-2 rounded-lg">
          <div className="flex flex-row justify-between items-center mb-2">
            <h2 className="text-xl font-medium ">Čas na dokument</h2>
            <i className="bx bx-dots-horizontal-rounded"></i>
          </div>
          <div className="w-full border-2 mb-5"></div>
          <p className="text-sm font-medium text-gray-500">Čas strávený na vyrábaní dokumentu</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-3xl font-medium">03'60''</p>
            <img src={Img} width={85} alt="" />
          </div>
        </div>
        <div className="p-5 border-2 rounded-lg">
          <div className="flex flex-row justify-between items-center mb-2">
            <h2 className="text-xl font-medium ">Typ používateľa</h2>
            <i className="bx bx-dots-horizontal-rounded"></i>
          </div>
          <div className="w-full border-2 mb-5"></div>
          <p className="text-sm font-medium text-gray-500">Najbežnejší používatelia</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-3xl font-medium">Firmy</p>
            <img src={Img} width={85} alt="" />
          </div>
        </div>
        <div className="p-5 border-2 rounded-lg">
          <div className="flex flex-row justify-between items-center mb-2">
            <h2 className="text-xl font-medium ">Typ podľa šablóny</h2>
            <i className="bx bx-dots-horizontal-rounded"></i>
          </div>
          <div className="w-full border-2 mb-5"></div>
          <p className="text-sm font-medium text-gray-500">Najbežnejšie firmy</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-3xl font-medium">Firmy</p>
            <img src={Img} width={85} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-10 flex w-full justify-center">
      <img src={GrafImg} alt=""/>
      </div>
    </Layout>
  );
}

export default DashBoard;
