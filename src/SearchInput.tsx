function SearchInput() {
  return (
    <form className="max-w-full mx-auto mb-4">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <a
          className="absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer"
        >
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.959651 1.61C2.97965 4.2 6.70965 9 6.70965 9V15C6.70965 15.55 7.15965 16 7.70965 16H9.70965C10.2597 16 10.7097 15.55 10.7097 15V9C10.7097 9 14.4297 4.2 16.4497 1.61C16.9597 0.95 16.4897 0 15.6597 0H1.74965C0.919651 0 0.449651 0.95 0.959651 1.61Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </form>
  );
}

export default SearchInput;
