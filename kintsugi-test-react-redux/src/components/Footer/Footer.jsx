import Logo from "../Logo/Logo"
import styled from "styled-components";

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100px;
`;

const Footer = () => {
  const footerStyle = "footer-logo";

  return (
    <footer>
      <FooterWrapper>
        <Logo className={footerStyle}/>
      </FooterWrapper>
    </footer>
  )
}

export default Footer;