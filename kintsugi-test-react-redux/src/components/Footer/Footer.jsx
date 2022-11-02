import styled from "styled-components";
import { IconsSet } from "./IconsSet";

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100px;
`;

const Text = styled.p`
  position: absolute;
  bottom: 10px;
  left: 40%;
`;

const Footer = () => {

  return (
    <footer>
    <FooterWrapper>
        <Text>&#169; Kintsugi</Text>
        <IconsSet />
      </FooterWrapper>
      </footer>
  )
}

export default Footer;