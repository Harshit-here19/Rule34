import PropTypes from "prop-types";
import "../App.css";

function CardDetails(props) {
  let tags = props.tags;
  tags = tags.slice(0, 200);

  return (
    <div
      className="w-[30vw] h-[53.5vh] p-4 flex flex-col justify-evenly"
      id="CardDetails"
    >
      <div>
        {
          <p className="text-black text-xl">
            <span className="text-xl font-semibold underline">Tags</span> :{" "}
            <span className="text-sm">{tags}</span>
          </p>
        }
        <br />
        {
          <p className="text-black text-xl">
            <span className="text-xl font-semibold underline">Rating</span> :{" "}
            {props.rating}
          </p>
        }
        <br />
        {
          <p className="text-black text-xl">
            <span className="text-xl font-semibold underline">Comments</span> :{" "}
            {props.comment}
          </p>
        }
        <br />
        <a href={props.file} target="_blank" rel="noreferrer" download>
          <button className="bg-white text-black pt-2 pb-2 pl-4 pr-4 rounded  font-semibold hover:bg-black hover:text-white transition-all duration-100 ease-in">
            View
          </button>
        </a>
      </div>
    </div>
  );
}

CardDetails.propTypes = {
  tags: PropTypes.string,
  rating: PropTypes.string,
  comment: PropTypes.number,
  file: PropTypes.string,
};

export default CardDetails;
