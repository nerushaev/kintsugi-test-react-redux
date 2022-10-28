import MainMenu from "../MainMenu/MainMenu";
import NavState from "../../context/navState";
import Footer from '../Footer/Footer'
import { Outlet } from "react-router";
import Section from "../Section/Section";

export default function SharedLayout () {
  return (
    <Section>
      <NavState>
        <MainMenu />
          </NavState>
        <Outlet />
      <Footer />
    </Section>
  )
}