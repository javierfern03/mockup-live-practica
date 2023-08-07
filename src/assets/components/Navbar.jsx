import logo from "../../images/logo.png"

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-container__logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <ul className="navbar-container__list">
            <li className="navbar-container__list__item"><a href="#home">Home</a></li>
            <li className="navbar-container__list__item"><a href="#about">About Us</a></li>
            <li className="navbar-container__list__item"><a href="#sevices">Services</a></li>
            <li className="navbar-container__list__item"><a href="#contact">Contact</a></li>
            <li className="navbar-container__list__item">
              <div className="navbar-container__list__item__buttons">
                <button className="navbar-container__button navbar-container__button--In">Sing Up</button>
                <button className="navbar-container__button">Sing In</button>
              </div>
            </li>
          </ul>
        </nav>
        
      </div>
    </>
  )
}

export default Navbar