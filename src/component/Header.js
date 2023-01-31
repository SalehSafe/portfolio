import "./Header.css";
import saleh from '../assets/saleh.jpg'
function Header() {
  return (
    <header>
<nav className="navBar">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo "><img src={saleh} alt="saleh safe" className="profile-img"/>
</a>
      <ul id="nav-mobile" class="right  show-on-medium-and-up ">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </div>
  </nav>
    </header>
  );
}

export default Header;
