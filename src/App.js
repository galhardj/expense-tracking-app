import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar uses <Link>
import Home from "./pages/Home";
import NewPage from "./pages/NewPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/newpage" component={NewPage} />
      </Switch>
    </Router>
  );
}

export default App;
