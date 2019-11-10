import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";

import Login from './components/login/Login';
import Register from './components/login/Register';
import DashboardPlaceholder from './components/dashboard/DashboardPlaceholder';
import Menu from './components/Menu';
import store from "./store";
import './App.css';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
				<div className="App">
					<Menu />
					<Switch>
						<Route exact path="/samplepage" component={DashboardPlaceholder} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
					</Switch>
				</div>
				</Router>
		  </Provider>
		);
	}
}
export default App;
