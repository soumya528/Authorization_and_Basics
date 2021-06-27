import "./App.css";
import React from "react";
import pizza from "./Pizza.jpg";
import cake from "./Cakes.png";

/*function Header(props) {
  return (
    <>
      <h1> We serve the best {props.Food}</h1>
    </>
  );
}
function Main(props) {
  return (
    <React.Fragment>
      <h3 style={{ textAlign: "left" }}>Choose your Toppings</h3>
      <img src={pizza} height={400} alt="Pizzas Mammamia" />
     <ul style={{ textAlign: "left" }}>
        {props.Topping.map((top) => (
          <li key={top.id}>{top.title}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}
function Footer(props) {
  return (
    <section>
      <h3 style={{ textAlign: "left" }}>Choose your Deserts</h3>
      <img src={cake} height={400} alt="Pizzas Mammamia" />
      <ul style={{ textAlign: "left" }}>
        {props.Desert.map((SweetTooth) => (
          <li key={SweetTooth.id}>{SweetTooth.title}</li>
        ))}
      </ul>
      <p style={{ textAlign: "Centre" }}>Copyright {props.year}</p>
    </section>
  );
}
const Topping = [
  "Peperoni",
  "Sausage",
  "Chello Kebab",
  "Butter Chicken",
  "Minestroni"
];

const Desert = ["Red Velvet", "Cheese Cake", "Truffles", "Firni", "Waffles"];

const toppingsObject = Topping.map((top, i) => ({
  id: i,
  title: top
}));
//console.log(toppingsObject);
const desertsObject = Desert.map((SweetTooth, j) => ({
  id: j,
  title: SweetTooth
}));
//console.log(desertsObject);
function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url("./Pizza.jpg")` 
    }}>
      <Header Food="Pizzas" />
      <Main Topping={toppingsObject} />
      <Footer Desert={desertsObject} year={new Date().getFullYear()} />
    </div>
  );
}*/
function SecretComponent() {
  return <h1>Secret Information for Authorized Personel Only</h1>;
}
function RegularComponent() {
  return <h1>Everyone can see this</h1>;
}
/*function App(props) {
  if (props.authorized) {
    return <SecretComponent />;
  } else {
    return <RegularComponent />;
  }
  return(
    <>
    {props.authorized?<SecretComponent />:<RegularComponent />};
    </>
);
}*/
function App({ authorized }) {
  return <>{authorized ? <SecretComponent /> : <RegularComponent />}</>;
}
export default App;
