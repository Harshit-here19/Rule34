import PropTypes from "prop-types";

export default function RecommCard(props) {
  return (
    <div className="text-center my-8 flex flex-col items-center justify-center">
      <div className="md:w-[90%] w-full flex gap-2 border-4 border-purple-800  overflow-x-scroll">
        {props.img.map((e, i) => {
          return <img key={i} src={e} alt="" className="md:h-96 h-72" />;
        })}
      </div>
      <h1 className="text-xl underline my-4">{props.title}</h1>
      <div className="flex gap-2">
        <p>Models : </p>
        {props.name.map((e, i) => {
          return <span key={i}>{e},</span>;
        })}
      </div>
      <p>Source : {props.source}</p>
    </div>
  );
}

RecommCard.propTypes = {
  title: PropTypes.string,
  name: PropTypes.array,
  source: PropTypes.string,
  img: PropTypes.array,
};
