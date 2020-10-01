import { connect } from "react-redux";

import Header from "./component";
//import { basketCount } from "../addToBasket/selectors";
import collectionCount from "../collectionCount";

const mapStateToProps = (state) => ({
  basketCount: collectionCount(state.basket),
});

export default connect(mapStateToProps)(Header);
