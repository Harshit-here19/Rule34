// import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="w-[100vw] flex overflow-hidden flex-wrap">
      {Array(12)
        .fill()
        .map((item, index) => (
          <div className="inline-block m-4" key={index}>
            <Skeleton height={180} width={300} highlightColor="#87919e" />
            <div>
              <Skeleton width={300} highlightColor="#87919e" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonCard;
