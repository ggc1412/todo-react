import * as actions from "../modules";
import { connect } from "react-redux";
import Form from "../components/Form";

const mapStateProps = (state) => ({
    value: state.get("input")
});

const mapDispatchProps = (dispatch) => ({
    onChange: (e) => dispatch(actions.change(e)),
    onCreate: () => dispatch(actions.create())
});


const FormContainer = connect(mapStateProps, mapDispatchProps)(Form);

export default FormContainer;