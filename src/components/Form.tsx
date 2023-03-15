import { useState } from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
  username: string;
}

const Form = () => {
  // Yup validation
  const schema = yup.object().shape({
    username: yup.string().required("Username is required :)").min(1).max(39),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const username = watch("username");

  const onSubmit = (data: FormData) => {
    console.log(data);
    console.log(username);

    reset();
  };

  // For Fetching Data
  // const [username, setUsername] = useState("fredickandrewdimo");

  // const { data, isLoading, isError } = useQuery(["githubInfo"], () => {
  //   return Axios.get(`https://api.github.com/users/${username}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  const search = (
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
  );

  return (
    <div className="rounded-md mb-5">
      {/* Container */}
      <div className="content flex items-center justify-between bg-white p-4 rounded-md dark:bg-semiDarkBlue">
        {/* Search Icon */}
        <div className="mr-2">{search}</div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-grow justify-between align flex"
        >
          {/* Input */}
          <input
            type="text"
            placeholder="Search Github username..."
            className="mr-4 w-full focus:outline-none dark:bg-semiDarkBlue dark:text-white"
            {...register("username")}
          />

          <button
            type="submit"
            className="bg-lightBlue text-white py-2 px-4 rounded-md"
          >
            Search
          </button>
        </form>

        {/* Search Button */}
      </div>
      <p className="text-red-400 mt-3 ml-12">{errors.username?.message}</p>

      {/* Display fetched data
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oops! Something went wrong.</p>}
      {data && (
        <div>
          <p>{data.name}</p>
          <img src={data.avatar_url} alt={data.name} />
        </div>
      )} */}
    </div>
  );
};

export default Form;
