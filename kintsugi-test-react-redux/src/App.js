// import Section from "./components/Section/Section";
import NavState from "./context/navState"
import MainMenu from "./components/MainMenu/MainMenu";
import Footer from "./components/Footer/Footer";
import GoodsList from './components/Goods/GoodsList/GoodsList'

function App() {
  return (
    <>
      <NavState>
        <MainMenu />
      </NavState>
      <GoodsList />
      <Footer/>
    </>
  );
}

export default App;
