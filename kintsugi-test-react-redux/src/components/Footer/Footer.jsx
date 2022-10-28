import Logo from "../Logo/Logo"
import styled from "styled-components";

const FooterWrapper = styled.div`
position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
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
      </FooterWrapper>
    </footer>
  )
}

export default Footer;