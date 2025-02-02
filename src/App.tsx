import "./App.css";
import Router from "./routes/Routes";
import { BrowserRouter } from "react-router";
import Context from "./context/Context.tsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Context>
          <Router></Router>
        </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
