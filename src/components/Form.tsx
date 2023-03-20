import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { search } from "./svg";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import App, { AppContext } from "../App";

interface FormData {
  username: string;
}

const Form = () => {
  // Context API
  const { setData, setIsError, setIsLoading, isError, isLoading } =
    useContext(AppContext);

  // Yup validation
  const schema = yup.object().shape({
    username: yup.string().required("Username is required :)").min(1).max(39),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${data.username}`
      );
      const results = await response.json();
      setData(results);
      console.log(results);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-md mb-5">
      {/* Container */}
      <div className="content flex items-center justify-between bg-white p-4 rounded-md dark:bg-semiDarkBlue">
        {/* Search Icon */}
        <div className="mr-2">{search}</div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex-grow justify-between align flex"
        >
          {/* Input */}
          <input
            type="text"
            placeholder="Search Github username..."
            className="mr-4 w-full focus:outline-none dark:bg-semiDarkBlue dark:text-white"
            {...register("username")}
          />
          {/* Search Button */}
          <button
            type="submit"
            className="bg-lightBlue text-white py-2 px-4 rounded-md"
          >
            Search
          </button>
        </form>
      </div>

      {/* Required Error Message */}
      <p className="text-red-400 mt-3 ml-12">{errors.username?.message}</p>
    </div>
  );
};

export default Form;
