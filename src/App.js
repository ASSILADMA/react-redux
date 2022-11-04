import { useSelector,useDispatch } from "react-redux";
import {actions} from './store/index';

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch();
  const increment =()=>{
    dispatch(actions.increment());
  };
  const decrement =()=>{
    dispatch(actions.decrement());
  };
  const addBy = ()=>{
    let value=$(#value).val();
    dispatch(actions.addBy(value))
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <input type="text" id='value' name="value" onChang
      <button onClick={addBy}>Add value By 10</button>
    </div>
  );
}

export default App;
