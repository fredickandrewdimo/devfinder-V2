const Form = () => {
  return (
    <div className="rounded-md mb-5">
      <div className="content flex items-center justify-between bg-white p-4 rounded-md">
        <div className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-royalBlue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <form action="" className="flex-grow justify-between align flex">
          <input
            type="text"
            placeholder="Search Github username..."
            className="mr-4 w-full focus:outline-none"
          />
          <button className="bg-lightBlue text-white py-2 px-4 rounded-md">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
