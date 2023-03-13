import { Link } from "react-router-dom";

const Results = () => {
  return (
    <div className="p-6 bg-white rounded-md dark:bg-semiDarkBlue dark:text-white">
      <div className="flex mb-5">
        <div className="">
          <img src="" alt="" />
        </div>
        <div className="md:flex md:justify-between md:items-center w-full">
          <div>
            <p className="text-2xl font-bold">The Octocat</p>
            <Link to="/" className="text-lightBlue">
              @octocat
            </Link>
          </div>

          <div className="">
            <p className="text-gray">Joined 25 Jan 2011</p>
          </div>
        </div>
      </div>
      <div className="md:ml-40">
        <div className="mb-5">
          <p className="text-stone text-sm dark:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            distinctio ipsam voluptates unde ut beatae, consequatur libero
            voluptatibus nemo illo?
          </p>
        </div>
        <div className="flex items-center justify-around bg-darkWhite px-2 py-5 rounded-md mb-5 dark:bg-darkBlue">
          <div className="flex flex-col items-center">
            <p className="text-stone text-sm dark:text-gray">Repos</p>
            <p className="text-xl font-bold">8</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-stone text-sm dark:text-gray">Followers</p>
            <p className="text-xl font-bold">3938</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-stone text-sm dark:text-gray">Following</p>
            <p className="text-xl font-bold">9</p>
          </div>
        </div>
        <div className="text-sm md:grid md:grid-rows-2 md:grid-flow-col ">
          <div className="my-2 flex text-stone dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p className="ml-2">San Francisco</p>
          </div>
          <div className="my-2 text-stone flex dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>

            <p className="ml-2">https://github.blog</p>
          </div>
          <div className="my-2 flex text-stone dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p className="ml-2">Not Available</p>
          </div>
          <div className="my-2 flex text-stone dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>

            <p className="ml-2">@github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
