import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        imgPath="pizzas/spinaci.jpg"
        price={10}
      />
    </main>
  );
}

function Pizza(props) {
  // const style = {  color: "red" };
  return (
    <div className="pizza">
      <img src={props.imgPath} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const date = new Date();
  const time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  const openingHour = 12;
  const closingHour = 22;
  const isOpen = date.getHours() > openingHour && date.getHours() < closingHour;
  console.log(isOpen);

  return <footer className="footer">{time} We're currently open</footer>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App />, document.getElementById("root") );
