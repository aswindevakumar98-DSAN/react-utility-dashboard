
import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((previousCount) => previousCount + 1);
  }

  function decrement() {
    setCount((previousCount) => Math.max(0, previousCount - 1));
  }

  function reset() {
    setCount(0);
  }

  return (
    <section className="tool-card counter-card">
      <div className="card-heading">
        <div className="icon-box purple">#</div>
        <div>
          <h2>Counter</h2>
          <p>Track your count</p>
        </div>
      </div>

      <div className="counter-display">
        <span className="count-value">{count}</span>
        <span className="count-label">Current value</span>
      </div>

      {count === 0 ? (
        <p className="status warning">
          Minimum limit reached
        </p>
      ) : (
        <p className="status success">
          Counter is active
        </p>
      )}

      <div className="button-group">
        <button
          className="btn btn-secondary"
          onClick={decrement}
          disabled={count === 0}
        >
          − Decrement
        </button>

        <button className="btn btn-primary" onClick={increment}>
          + Increment
        </button>
      </div>

      <button className="btn btn-reset" onClick={reset}>
        Reset counter
      </button>
    </section>
  );
}

function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [history, setHistory] = useState([]);

  function generateNumber() {
    const number = Math.floor(Math.random() * 100) + 1;

    setRandomNumber(number);
    setHistory((previousHistory) => [number, ...previousHistory].slice(0, 5));
  }

  return (
    <section className="tool-card random-card">
      <div className="card-heading">
        <div className="icon-box green">🎲</div>
        <div>
          <h2>Random Generator</h2>
          <p>Discover a number from 1–100</p>
        </div>
      </div>

      <div className="random-display">
        {randomNumber === null ? (
          <div className="empty-state">
            <span className="dice-placeholder">?</span>
            <p>No number generated yet</p>
          </div>
        ) : (
          <div className="generated-result">
            <span className="random-value">{randomNumber}</span>
            <span className="count-label">Your random number</span>
          </div>
        )}
      </div>

      <button
        className="btn btn-generate"
        onClick={generateNumber}
      >
        🎲 Generate Random Number
      </button>

      <div className="history-section">
        <h3>Recent history</h3>

        {history.length === 0 ? (
          <p className="history-empty">Your numbers will appear here.</p>
        ) : (
          <div className="history-list">
            {history.map((number, index) => (
              <span className="history-number" key={index}>
                {number}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div className="brand-icon">U</div>

        <div>
          <h1>Utility Hub</h1>
          <p>Your everyday tools, all in one place.</p>
        </div>
      </header>

      <div className="welcome-section">
        <span className="eyebrow">REACT PROJECT by ASWIN</span>
        <h2>Small tools. Smart interactions.</h2>
        <p>
          Explore React state, button events, and conditional rendering
          through two simple utilities.
        </p>
      </div>

      <div className="tools-grid">
        <Counter />
        <RandomNumberGenerator />
      </div>

      <footer>
        Built with React <span>•</span> Powered by useState
      </footer>
    </main>
  );
}

export default App;