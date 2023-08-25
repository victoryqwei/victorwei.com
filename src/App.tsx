import vectorLogo from "./assets/vector.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://victorwei.com" target="_blank">
          <img src={vectorLogo} className="logo" alt="Vector logo" />
        </a>
      </div>
      <h1>Hey, I'm Victor.</h1>
      <div className="card">
        <p>Website is currently under construction. Check back later for updates!</p>
      </div>
      <p className="old-website">
        Or check out my old personal website <a href="https://old.victorwei.com">here</a>
      </p>
    </>
  );
}

export default App;
