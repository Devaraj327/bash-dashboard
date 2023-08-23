import "./App.scss";

function App() {
  return (
    <main>
      <header>
        <label htmlFor="toggle-nav">
          <div className="button">X</div>
        </label>
      </header>
      <input type="checkbox" id="toggle-nav" />
      <nav>
        <div className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
          >
            <path fill="#555" d="M521-878q143 14 243.033 114.208Q864.065-663.584 878-521H594q-8-26-27.5-44T521-591v-287Zm60 76v174q14 9 27 20.5t21 26.5h173q-25-80-83-138.5T581-802Zm-142-76v287q-35 14-56.5 45.188Q361-514.624 361-477q0 36.081 21.5 65.04Q404-383 439-369.913V-82Q286-96 183.5-209T81-477q0-155 102-270.5T439-878Zm-60 76q-109 30-173.5 121T141-477q0 111 66 199.5T379-157v-174q-37-25-57.5-63T301-477q0-45 20-85t58-66v-174Zm215 363h284q-14 143-114.208 243.033Q663.584-95.935 521-82v-288q26-8 45.5-25.5T594-439Zm35.167 60Q619-365 607.5-352 596-339 581-331v173q80-23 138-82t83-139H629.167ZM301-479Zm328-102Zm0 202Z" />
          </svg>
        </div>
        <p>nav item</p>
        <p>nav item</p>
        <p>nav item</p>
        <p>nav item</p>
        <p>nav item</p>
      </nav>
      <section>
        <div className="first">
          <div className="one">
            <div className="two"></div>
            <div className="two"></div>
          </div>
          <div className="one">
            <div className="two"></div>
            <div className="two"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
