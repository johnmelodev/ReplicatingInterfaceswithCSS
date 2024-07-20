import "./App.scss";
import { Logo } from "./components/logo";
import { ArrowIcon } from "./components/arrow-icon";

function App() {
  return (
    <main>
      <header className="header-container">
        <Logo />
        <nav className="menu-options">
          <a href="#what-we-offer">What we offer</a>
          <a href="#how-it-works">How it works</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
        <button>
          <div className="btn-face-white">
            Contact us
            <ArrowIcon />
          </div>
          <div className="btn-face-purple">
            Contact us
            <ArrowIcon />
          </div>
        </button>
      </header>
      <div className="content-container">
        <div className="heading-container">
          <h2>Let's grow your</h2>
          <h2>social presence.</h2>
        </div>
        <div className="bubble target">🎯</div>
        <div className="bubble shop">🛍️</div>
        <div className="bubble rocket">🚀</div>
        <div className="bubble fire">🔥</div>
      </div>
    </main>
  );
}

export default App;
