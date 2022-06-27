import "./App.scss";
import { Header } from "./Components/Header/Header";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { ItemsContainer } from "./Components/ItemsContainer/ItemsContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className="AppStore">
        <ItemsContainer />
      </div>
    </div>
  );
}
export default App;
