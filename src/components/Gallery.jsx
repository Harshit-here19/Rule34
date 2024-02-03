import { useState, useEffect } from "react";
import ErrorPage from "../error-page";
import GalleryCard from "./GalleryCard";
import SkeletonCard from "./SkeletonCard";
// import React from 'react';

function Gallery() {
  const [articles, setArticles] = useState([]);
  const [searchTags, setSearchTags] = useState("");
  const [searchBool, setSearchBool] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const url =
      "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=20&json=1";
    const response = await fetch(url);
    const data = await response.json().then(setLoading(false));
    // console.log(data);
    setArticles(data);
  };

  useEffect(() => {
    return () => {
      fetchData();
    };
  }, []);

  const search = async () => {
    try {
      const input = document.querySelector("input");
      setSearchTags(input.value);
      setSearchBool(true);
      const url = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=20&json=1&tags=${searchTags}`;
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mb-8">
        <input
          name="search"
          placeholder="Search the Tags"
          className="md:w-[40vw] w-[60vw] h-[7vh] pl-4 bg-white placeholder:text-slate-700  text-black"
        ></input>
        <button
          className="md:w-[10vw] w-[20vw] bg-purple-900 text-white h-[7vh]"
          onClick={search}
        >
          Search
        </button>
      </div>

      {error && <ErrorPage />}

      {!error && (
        <div>
          <div className="flex justify-center items-center mb-8">
            {searchBool && (
              <p className="text-xl ">Showing Results : {searchTags} </p>
            )}
          </div>

          <div className="flex justify-center items-center flex-row">
            {loading && <SkeletonCard />}
          </div>

          {!loading && (
            <div className="flex flex-wrap gap-8 justify-center items-center">
              {articles.map((e) => {
                return (
                  e.file_url && (
                    <GalleryCard
                      key={e.id}
                      tags={e.tags}
                      file={e.file_url}
                      source={e.source}
                      rating={e.rating}
                      comment={e.comment_count}
                    />
                  )
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Gallery;
