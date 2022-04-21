import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Header from "./components/Header/Header";
import Social from "./components/SocialMedia";
import SignIN from "./components/SignIn";
import EditContact from "./components/EditContact";
const App = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/social" component={Social} />
        <Route path="/signin" component={SignIN} />
        <Route
          path="/editContact/:id"
          render={(props) => <EditContact {...props} isLoggedIN={true} />}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default App;
