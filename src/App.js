import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/places/new" exact component={NewPlace} />
        <Redirect path="/" />
      </Switch>
    </Router>
  );
};

export default App;
