import './Logo.css';

const Logo = (className) => {
  return (
    <a href="../../../public/index.html">
    <img className={`${className.className}`} src={require("../../images/kintsugi-logo.jpg")} alt="logo" />
    </a>
    )
}

export default Logo;