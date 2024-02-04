import { useState, useLayoutEffect } from "react";
import HomeCard from "./HomeCard";

export default function Home() {
  const [results, setResults] = useState([]);

  async function getImages() {
    const url = "https://porn-pictures-api.p.rapidapi.com/pornstars/female/1";
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
      // console.log(data.result);
      const resultArray = data.result;
      const suffledArray = resultArray.sort(() => Math.random() - 0.5);
      setResults(suffledArray);
    } catch (error) {
      console.error(error);
    }
  }

  useLayoutEffect(() => {
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex w-full h-[100vh] flex-wrap gap-4 items-center justify-center">
        {results.map((e) => {
          return (
            <HomeCard key={e.id} name={e.pornStarName} picture={e.picture} />
          );
        })}
      </div>
    </>
  );
}
