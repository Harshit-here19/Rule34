import { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";
// import React from 'react';

function Gallery() {
  const [articles, setArticles] = useState([]);
  const fetchData = async () => {
    const url =
      "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=20&json=1";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setArticles(data);
  };

  useEffect(() => {
    return () => {
      fetchData();
    };
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {articles.map((e) => {
          return (
            <GalleryCard
              key={e.id}
              tags={e.tags}
              file={e.file_url}
              source={e.source}
            />
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
