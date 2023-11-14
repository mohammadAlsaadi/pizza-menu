import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    //can use multible class of css
    <div className="container header">
      {/* <h1>Hello React !!!</h1> */}
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    // color: "red", fontSize: "40px", textTransform: "uppercase"
  };

  return (
    <header className="header">
      <h1 style={style}>Saadi Pizaa-Menu</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="tomato,mozarila,and spinach"
        photoName="Pizzas/spinaci.jpg"
        // price="10"
        price={10} //here it's number
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="tomato,mushrooms,and onion"
        photoName="Pizzas/funghi.jpg"
        // price="12"
        price={12}
      />
    </main>
  );
}
function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div className="">
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 5}.00 JD</span>
      </div>
    </div>
  );
}

function Footer() {
  // const hour = new Date().getHours();
  // const openedHour = 9;
  // const closedHour = 22;
  // const isOpen = hour >= openedHour && hour <= closedHour;
  // console.log(isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open !
    </footer>
  ); //use jsx
  // return createElement("footer", null, "We're currently open !");
}

//never nest the functions !!

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
