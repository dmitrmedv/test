import { useDispatch, useSelector } from "react-redux";
import { selectedToDo } from "../../redux/todo/selectors";
import { removeTodo } from "../../redux/todo/operations";

const List = () => {
  const dataList = useSelector(selectedToDo);
  const dispatch = useDispatch();

  return (
    <ul>
      {dataList.map(({ id, name }) => {
        return (
          <li key={id}>
            {name}
            <button type="button" onClick={() => dispatch(removeTodo(id))}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
