import PropTypes from "prop-types";

export default function RecommCard(props) {
  return (
    <div className="text-center my-8">
      <div
        className="w-full flex gap-2 border-4 border-purple-800"
        id="scrollDiv"
      >
        {props.img.map((e, i) => {
          return <img key={i} src={e} alt="" className="h-96" />;
        })}
      </div>
      <h1 className="text-xl underline my-4">{props.title}</h1>
      <p>Model : {props.name}</p>
      <p>Source : {props.source}</p>
    </div>
  );
}

RecommCard.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  source: PropTypes.string,
  img: PropTypes.array,
};
