import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/DummyRoutes/About";
import Contact from "./components/DummyRoutes/Contact";
import TermsPolicy from "./components/DummyRoutes/TermsPolicy";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import OrderPage from "./Pages/OrderPage";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={TermsPolicy} exact />
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
        <Route path="/orders" component={OrderPage} />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
