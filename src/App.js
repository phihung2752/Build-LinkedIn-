import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer"; // Đảm bảo import đúng

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Login />
						<Footer />
					</Route>
					<Route path="/home">
						<Header />
						<Home />
						<Footer />
					</Route>
					{/* Thêm các route khác nếu cần */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
