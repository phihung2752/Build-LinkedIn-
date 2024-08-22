import "./index.css"; // hoặc './App.css' nếu bạn sử dụng App.css
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login"; // Update this path as needed
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					{/* Add more routes here */}
					<Route path="/home">
						<Header />
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
