import "../src/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import { createContext, useState } from "react";
import LogIn from "./Components/LogIn/LogIn";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/login">
              <LogIn/>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}
export default App;
