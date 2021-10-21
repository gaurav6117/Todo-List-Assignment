import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import Form from "./components/Form";
import Login from "./components/Login";
import Registration from "./components/Registration"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/registration" exact component={Registration}/>
        <Route path="/Home" exact component={Form}/>
      </Switch>
    </Router>
  )
}
export default App;
