import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "../../redux/counter/selectors";
import { decrement, increment } from "../../redux/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectCount);
  return (
    <div>
      <p>{value}</p>
      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
};

export default Counter;
