import PropTypes from "prop-types";

export default function HomeCard(props) {
  return (
    <div className="bg-white w-72 h-80 my-8 border-white border-4">
      <img className="w-72 h-72" src={props.picture} alt={props.name} />
      <h2 className="text-black text-center">Name : {props.name}</h2>
    </div>
  );
}

HomeCard.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
};
