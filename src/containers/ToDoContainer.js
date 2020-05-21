// TodoItemList와 연결
import * as actions from "../modules";
import { connect } from "react-redux";
import TodoItemList from "../components/TodoItemList";

const mapStateProps = (state) => ({
    todos: state.get('todos')
});

const mapDispatchProps = (dispatch) => ({
    onToggle: (id) => dispatch(actions.toggle(id)),
    onRemove: (id) => dispatch(actions.remove(id))
});

const TodoItemContainer = connect(mapStateProps, mapDispatchProps)(TodoItemList);

export default TodoItemContainer;
