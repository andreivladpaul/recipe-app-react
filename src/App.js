import Pages from "./pages/Pages";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
//import style from "./css/index.css"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavLink className="navlink" to={"/"}>
          <h1>Foodie</h1>
        </NavLink>
        <Search />
        <Pages />
      </div>
    </BrowserRouter>
  );
}
export default App;
