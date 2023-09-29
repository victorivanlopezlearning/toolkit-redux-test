import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './store/slices/counter';
import './App.css'

function App() {

  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux App</h1>
      <p>Count is: {counter}</p>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
      </div>
    </>
  )
}
export default App;