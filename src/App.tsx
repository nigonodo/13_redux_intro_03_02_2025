import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./redux/store";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const theme = useSelector((state: RootState) => state.theme.value);
  const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
  const dispatch = useDispatch();

  return (
    <div className={`container-fluid d-flex justify-content-center align-items-center vh-100 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <div className="d-flex flex-column gap-3 text-center">
        <div className="btn-group">
          <button className="btn btn-danger" onClick={() => dispatch({ type: 'change', payload: -10 })}>
            -10
          </button>
          <button className="btn btn-warning" onClick={() => dispatch({ type: 'change',payload: -1})}>
            -1
          </button>
          <div className="px-3 fw-bold fs-4">{count}</div>
          <button className="btn btn-success" onClick={() => dispatch({ type: 'change', payload: 1})}>
            +1
          </button>
          <button className="btn btn-primary" onClick={() => dispatch({ type: 'change', payload: 10})}>
            +10
          </button>
        </div>

        <div className="btn-group">
          <button className="btn btn-light" onClick={() => dispatch({ type: 'theme/change', payload: 'light' })}>
            Light
          </button>
          <button className="btn btn-dark" onClick={() => dispatch({ type: 'theme/change',payload: 'dark' })}>
            Dark
          </button>
        </div>

        <div>
          <p>Ingredients: {ingredients.join(', ')} </p>
          <button onClick={() => dispatch({ type: 'ingredients/add', payload: 'bread' })}>Add bread</button>
          <button onClick={() => dispatch({ type: 'ingredients/add', payload: 'cheese' })}>Add cheese</button>
          <button onClick={() => dispatch({ type: 'ingredients/add', payload: 'salami' })}>Add salami</button>
          <button onClick={() => dispatch({ type: 'ingredients/add', payload: 'tomato' })}>Add tomato</button>
          <button onClick={() => dispatch({ type: 'ingredients/delete' })}>Delete all ingredients</button>
        </div>
      </div>
    </div>
  );
}

export default App;
