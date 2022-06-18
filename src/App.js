import "./App.css";
import {BrowserRouter , Route , Switch } from "react-router-dom"
import TopBar from "./components/TopBar";
import About from "./components/DummyRoutes/About";
import Contact from "./components/DummyRoutes/Contact";
import TermsPolicy  from "./components/DummyRoutes/TermsPolicy";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={TermsPolicy} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
