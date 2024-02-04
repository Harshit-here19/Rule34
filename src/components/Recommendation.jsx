import { useState } from "react";
import RecommCard from "./RecommCard";

export default function Recommendation() {
  const [result, setResult] = useState([]);
  const [isError, setIsError] = useState(false);
  const [Error, setError] = useState("");

  const search = async () => {
    const input = document.querySelector("input");
    let temp = input.value.toLowerCase();
    let temp2 = temp.replace(/\s/g, "%20");

    const url = `https://porn-pictures-api.p.rapidapi.com/pictures/${temp2}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2c4f65215emsh67cdfa36fb1aee7p14c84djsnfabbedcb4c6a",
        "X-RapidAPI-Host": "porn-pictures-api.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const status = response.status;
      if (status === 500) {
        throw new Error("Server Problem Try to search a available keyword");
      }
      console.log(data);
      setResult(data);
    } catch (err) {
      console.log(err);
      setIsError(true);
      setError(err);
    }
  };
  return (
    <>
      <h1 className="text-3xl mx-4 mb-2">Recommendations :-</h1>
      <hr />
      <div className="flex justify-center items-center my-8">
        <input
          name="search"
          placeholder="Search the PornStar"
          className="md:w-[40vw] w-[60vw] h-[7vh] pl-4 bg-white placeholder:text-slate-700  text-black"
        ></input>
        <button
          className="md:w-[10vw] w-[20vw] bg-purple-900 text-white h-[7vh]"
          onClick={search}
        >
          Search
        </button>
      </div>

      {isError && (
        <div className="text-center">
          <p>Search the Relevant PortStar</p>
        </div>
      )}

      {!isError &&
        result.map((e) => {
          return (
            <RecommCard
              key={e.id}
              title={e.title}
              name={e.models}
              source={e.source}
              img={e.images}
            />
          );
        })}
    </>
  );
}
