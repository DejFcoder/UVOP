import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border-2 border-gray-200 rounded-xl">
        <form action="" className="py-10 px-14">
          <div>
            <div>
              <h1 className="text-4xl font-bold">Prihlásiť sa</h1>
              <h2 className="text-2xl font-bold mb-10">pre vstup do systému</h2>
            </div>

            <div>
              <div className="flex flex-col">
                <p>E-mail</p>
                <input
                  className="border-2 mt-2 border-black rounded w-72 py-1"
                  type="text"
                />
              </div>
              <div className="flex flex-col mt-2">
                <p>Heslo</p>
                <input
                  className="border-2 mt-2 border-black w-72 rounded py-1"
                  type="text"
                />
              </div>
            </div>

            <div className="w-full flex flex-col items-center mt-5">
              <Link
                to="/"
                className="bg-blue-600 rounded-md text-white p-2 mt-5 font-medium"
              >
                Prihlásiť sa
              </Link>
              <p className="my-1">alebo</p>
              <button className="font-medium rounded-md p-2 bg-gray-500 text-white">
                Prihlásiť sa cez slovensko.sk
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
