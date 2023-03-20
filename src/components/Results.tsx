import { useContext } from "react";
import { AppContext } from "../App";
import ResultTemplate from "./ResultTemplate";

export const NoResults = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-lg text-gray">
        Discover Skilled Developers on GitHub with
        <span className="font-bold text-white"> DevFinder</span>
      </h1>
    </div>
  );
};

const Results = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="p-6 bg-white rounded-md dark:bg-semiDarkBlue dark:text-white">
      {data ? <ResultTemplate /> : <NoResults />}
    </div>
  );
};

export default Results;
