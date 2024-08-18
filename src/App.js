import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login'; // Update this path as needed

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {/* Add more routes here */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
