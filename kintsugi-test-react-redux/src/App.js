// import Section from "./components/Section/Section";
import NavState from "./context/navState"
import MainMenu from "./components/MainMenu/MainMenu";

function App() {
  return (
      <NavState>
        <MainMenu />
      </NavState>
  );
}

export default App;
