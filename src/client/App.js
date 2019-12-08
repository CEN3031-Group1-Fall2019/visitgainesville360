import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";

import Login from './components/login/Login';
import Register from './components/login/Register';
import DashboardPlaceholder from './components/dashboard/DashboardPlaceholder';
import Menu from './components/Menu';
import Account from './components/Account'
import store from "./store";
import './App.css';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminMenu from './components/admin/AdminMenu';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
				<div className="App">
					<Menu />
					<AdminMenu />
					<Switch>
						<Route exact path="/samplepage" component={DashboardPlaceholder} />
						<Route exact path="/admin" component={AdminDashboard} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/account" component={Account} />
					</Switch>
				</div>
				</Router>
		  </Provider>
		);
	}
}
export default App;
