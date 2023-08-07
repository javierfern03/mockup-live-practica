import "./App.css";
import Navbar from "./assets/components/Navbar";
import icon1 from "./images/negocios-y-finanzas.png";

function App() {
  return (
    <>
      <header className="header">
        <Navbar />

        <div className="header__content">
          <div className="header__content__title">
            <h1>Buying Bitcoin has never been easier</h1>
            <div></div>
          </div>
          <p className="header__content__p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            repellendus excepturi illo id quos saepe, iusto officia ea autem
            tenetur laudantium architecto reiciendis numquam quod eligendi
            velit, deserunt non vel!
          </p>
        </div>
      </header>

      <section>
        <h2>Welcome to cryptocurrencies</h2>
        <div className="cards-cotainer">
          <div className="card">
            <div className="card__image-container">
              <img className="card__image" src={icon1} alt="" />
            </div>
            <div className="card__content">
              <div className="card__content__title">
                <h3>Make payment from almost anywhere</h3>
                <div></div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="card">
            <div className="card__image-container">
              <img className="card__image" src={icon1} alt="" />
            </div>
            <div className="card__content">
              <div className="card__content__title">
                <h3>Make payment from almost anywhere</h3>
                <div></div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="card">
            <div className="card__image-container">
              <img className="card__image" src={icon1} alt="" />
            </div>
            <div className="card__content">
              <div className="card__content__title">
                <h3>Make payment from almost anywhere</h3>
                <div></div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="card">
            <div className="card__image-container">
              <img className="card__image" src={icon1} alt="" />
            </div>
            <div className="card__content">
              <div className="card__content__title">
                <h3>Make payment from almost anywhere</h3>
                <div></div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
