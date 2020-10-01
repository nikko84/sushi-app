//import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SushiCard from "./component";
import { addToBasket } from "../addToBasket/actions";

// const mapDispatchToProps = (dispatch) =>
//   //addToBasket: (sushiId, count) => dispatch(addToBasket(sushiId, count)),
//   bindActionCreators({ addToBasket }, dispatch);

const mapDispatchToProps = { addToBasket };

export default connect(null, mapDispatchToProps)(SushiCard);
