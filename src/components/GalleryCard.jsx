import { useState } from "react";
import "../App.css";
import PropTypes from "prop-types";
import CardDetails from "./CardDetails";

function GalleryCard(props) {
  const [detail, setDetail] = useState(false);

  let source = props.source;
  if (source == "") source = props.file;

  const [tags, rating, comment] = [props.tags, props.rating, props.comment];

  return (
    <div
      className="w-fit h-fit md:h-[60vh] bg-black rounded shadow overflow-hidden flex flex-col"
      id="image"
    >
      <div className="flex md:flex-row flex-col justify-center items-center">
        <div>
          <img className="h-[53.5vh]" src={props.file} alt="" />
        </div>
        <div>
          {detail && (
            <CardDetails
              tags={tags}
              rating={rating}
              comment={comment}
              file={props.file}
            />
          )}
        </div>
      </div>

      <div
        className="cursor-pointer bg-white border-black border-t-2 flex justify-center text-2xl"
        onClick={() => {
          detail ? setDetail(false) : setDetail(true);
        }}
      >
        👀
      </div>
    </div>
  );
}

GalleryCard.propTypes = {
  tags: PropTypes.string,
  file: PropTypes.string,
  source: PropTypes.string,
  rating: PropTypes.string,
  comment: PropTypes.number,
};

export default GalleryCard;
