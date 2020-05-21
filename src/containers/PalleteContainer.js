// Pallete에 store 연결

import * as actions from "../modules";
import { connect } from "react-redux";
import Pallete from "../components/Pallete";

const mapStateProps = (state) => ({
  colors: state.get("colors"),
});

const mapDispatchProps = (dispatch) => ({
  onSetColor: (id) => dispatch(actions.setColor(id)),
});

const PalleteContainer = connect(mapStateProps, mapDispatchProps)(Pallete);

export default PalleteContainer;
