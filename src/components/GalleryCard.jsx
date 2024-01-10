// import React from 'react';
import PropTypes from "prop-types";

function GalleryCard(props) {
  let tags = props.tags;
  tags = tags.slice(0, 80);

  let source = props.source;
  if (source == "") source = props.file;

  return (
    <div className="w-1/4 h-2/4 inline border-gray-500 border-4 rounded shadow">
      <a href={source} target="_blank" rel="noreferrer">
        <img className="bg-cover" src={props.file} alt="" />
      </a>
      <p> Tags : {tags}</p>
    </div>
  );
}

GalleryCard.propTypes = {
  tags: PropTypes.string,
  file: PropTypes.string,
  source: PropTypes.string,
};

export default GalleryCard;
