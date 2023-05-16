import { Provider } from "react-redux";
import "./App.css";
import CategoryRoutes from "./routes/CategoryRoutes";
import categoryStore from "./redux/categoryStore";

function App() {
  return (
    <>
      <div className="container mt-5">
        <Provider store={categoryStore}>
          <CategoryRoutes />
        </Provider>
      </div>
    </>
  );
}

export default App;
