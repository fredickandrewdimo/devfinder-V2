import React from "react";
import { Link } from "react-router-dom";
import { location, link, twitter, company } from "./svg";
import { useContext } from "react";
import { AppContext } from "../App";

const ResultTemplate = () => {
  const { data } = useContext(AppContext);
  const dateJoined = new Date(Date.parse(data.created_at));
  const formattedDate = dateJoined.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="">
      <div className="flex mb-5">
        <div className="w-36 h-24 md:w-44 md:h-32  mr-4 md:mr-6 bg-darkBlue rounded">
          <img src={data.avatar_url} alt="" className="w-full h-full rounded" />
        </div>

        <div className="md:flex md:justify-between md:items-center w-full">
          <div>
            <p className="text-2xl font-bold">{data.name}</p>
            <Link to="/" className="text-lightBlue">
              @{data.login}
            </Link>
          </div>

          <div className="">
            <p className="text-gray">Joined: {formattedDate}</p>
          </div>
        </div>
      </div>

      <div className="md:ml-40">
        <div className="mb-5">
          <p className="text-stone text-base dark:text-white">{data.bio}</p>
        </div>

        <div className="flex items-center justify-around bg-darkWhite px-2 py-5 rounded-md mb-5 dark:bg-darkBlue">
          <div className="flex flex-col items-center">
            <p className="text-stone text-sm dark:text-gray">Repos</p>
            <p className="text-xl font-bold">{data.public_repos}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-stone text-sm dark:text-gray">Followers</p>
            <p className="text-xl font-bold">{data.followers}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-stone text-sm dark:text-gray">Following</p>
            <p className="text-xl font-bold">{data.following}</p>
          </div>
        </div>

        <div className="text-sm md:grid md:grid-rows-2 md:grid-flow-col ">
          <div className="my-2 flex text-stone dark:text-white">
            {location}
            <p className="ml-2">
              {data.location ? data.location : "Not Available"}
            </p>
          </div>
          <div className="my-2 text-stone flex dark:text-white">
            {link}
            <p className="ml-2">{data.blog ? data.blog : "Not Available"}</p>
          </div>
          <div className="my-2 flex text-stone dark:text-white">
            {twitter}
            <p className="ml-2">
              {data.twitter_username ? data.twitter_username : "Not Available"}
            </p>
          </div>
          <div className="my-2 flex text-stone dark:text-white">
            {company}
            <p className="ml-2">
              {data.company ? data.company : "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultTemplate;
