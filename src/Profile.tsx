import Layout from "./Layout";

function Profile() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-12">Profil</h1>

      <div className="border-2 flex flex-col p-6 rounded-xl mb-5">
        <h2 className="text-2xl font-bold mb-3">Všeobecné informácie</h2>

        <div className="flex flex-row mb-3">
          <h3 className="text-md font-semibold flex-shrink-0 w-32">Názov</h3>
          <p>Miestny úrad Bratislava - Ružinov</p>
        </div>

        <div className="flex flex-row mb-3">
          <h3 className="text-md font-semibold flex-shrink-0 w-32">IČO</h3>
          <p>00603155</p>
        </div>

        <div className="flex flex-row mb-3">
          <h3 className="text-md font-semibold flex-shrink-0 w-32">Sídlo</h3>
          <div>
            <p>Mierová 21</p>
            <p>82705 Bratislava - Mestská časť Ružinova</p>
          </div>
        </div>

        <div className="flex flex-row mb-3">
          <h3 className="text-md font-semibold flex-shrink-0 w-32">
            Typ Obstarávania
          </h3>
          <p className="ml-5">Úrad</p>
        </div>
      </div>

      <div className="border-2 flex flex-col p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-3">Kontakt</h2>

        <div className="flex flex-row mb-3">
          <h3 className="text-md font-semibold flex-shrink-0 w-32">Tel.Č.:</h3>
          <p>+421 2 48 284 111</p>
        </div>

        <div className="flex flex-row mb-3">
          <h3 className="text-md font-semibold flex-shrink-0 w-32">E-Mail:</h3>
          <p>Ruzinov@Ruzinov.sk</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold my-5">Moje Obstarávanie</h2>

      <div className="grid items-center grid-cols-7 mt-4 border-2 border-black rounded-lg p-4 gap-4 font-medium">
        <span className="text-center">123456</span>
        <span className="text-center">
          Sutaz o obstaravani traktorov v meste Bratislava 2023
        </span>
        <span className="text-center">03000000-1</span>
        <span className="text-center">12.12.2034</span>
        <span className="text-center">Mestky urad Bratislava</span>
        <span className="text-center text-green-600 font-bold">Skontrolovane 21.02.2035</span>
        <span className="flex justify-center items-center">
          <i className="bx bx-file text-3xl"></i>
        </span>
      </div>
      <div className="grid items-center grid-cols-7 mt-4 border-2 border-black rounded-lg p-4 gap-4 font-medium hover:bg-blue-300">
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
      </div>
      <div className="grid items-center grid-cols-7 mt-4 border-2 border-black rounded-lg p-4 gap-4 font-medium">
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
      </div>
      <div className="grid items-center grid-cols-7 mt-4 border-2 border-black rounded-lg p-4 gap-4 font-medium">
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
      </div>
    </Layout>
  );
}

export default Profile;
