import * as actions from "../modules";
import { connect } from "react-redux";
import Form from "../components/Form";

const mapStateProps = (state) => ({
    value: state.get("input")
});

const mapDispatchProps = (dispatch) => ({
    onChange: () => dispatch(actions.change),
    onCreate: (e) => dispatch(actions.create(e))
});


const FormContainer = connect(mapStateProps, mapDispatchProps)(Form);

export default FormContainer;