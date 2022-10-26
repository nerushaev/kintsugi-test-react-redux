import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from '../../context/navState';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import { SideMenu } from '../SideMenu/SideMenu';
import Logo from '../Logo/Logo'

const Navbar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: #fff none repeat scroll 0% 0%;
  color: #000;
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px;
  z-index: 500;
`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <Navbar>
        <HamburgerButton />
        <Logo className={"nav-logo"}/>
      </Navbar>
      <SideMenu />
    </header>
  );
};

export default MainMenu;