import MainMenu from "../MainMenu/MainMenu";
import NavState from "../../context/navState";
import Footer from '../Footer/Footer'
import { Outlet } from "react-router";
import Container from "../Container/Container";

export default function SharedLayout () {
  return (
    <Container>
      <NavState>
        <MainMenu />
          </NavState>
      <main>
      <Outlet />
      </main>
        <Footer />
      </Container>
  )
}