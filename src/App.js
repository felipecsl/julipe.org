import "./App.css";

function App() {
  return (
    <div className="p-10">
      <header className="header">
        <h1 className="text-3xl">J & F</h1>
      </header>
      <section className="menu mt-10">
        <nav className="menu">
          <ul>
            <li>
              <a
                href="https://theknot.com/julipe"
                target="_blank"
                className="underline"
                rel="noopener noreferrer"
              >
                Wedding website
              </a>
            </li>
            <li>
              <a
                href="https://forms.gle/yCgD3hBzZzVk5RMQ9"
                target="_blank"
                className="underline"
                rel="noopener noreferrer"
              >
                RSVP here
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default App;
