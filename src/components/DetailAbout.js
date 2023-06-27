// import package for property types
import PropTypes from "prop-types";

// create component here
const DetailAbout = (props) => {
  return (
    <>
      <h1>title: {props.title}</h1>
      <p>summary: {props.summary}</p>
      <p>total: {props.total}</p>
      {props.rungkad ? "true" : "false"}
    </>
  );
};

// define property type for this component here
DetailAbout.propTypes = {
  title: PropTypes.string.isRequired, // required props
  summary: PropTypes.string,
  total: PropTypes.number,
  rungkad: PropTypes.bool,
};

export default DetailAbout;
