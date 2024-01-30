import "./treeStyle.css";
import svg from "../../images/svg2.png";
import PropTypes from "prop-types";

export const Trees = ({isTrue}) => {
  return (
    <div className={isTrue ? "trees__container" : "tree_invisible"}>
        <img src={svg} alt="" />
        <img className="img2" src="https://media2.giphy.com/media/JpMi1kR5PQimcuFJbP/giphy.gif?cid=6c09b9525981f48179590f8846b8d8cdf1c372efaf6c9f13&rid=giphy.gif&ct=s" alt=""/>
    </div>
  )
}

Trees.propTypes = {
  isTrue: PropTypes.any,
}
