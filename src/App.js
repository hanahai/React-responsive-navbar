import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage } from "./components/Pages/MainPage";
import { Projects } from "./components/Pages/Projects";
import { Contact } from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
