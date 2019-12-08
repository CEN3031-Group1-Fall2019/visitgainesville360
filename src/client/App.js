import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";

import Login from './components/login/Login';
import Register from './components/login/Register';
import DashboardPlaceholder from './components/dashboard/DashboardPlaceholder';
import Menu from './components/Menu';
import store from "./store";
import './App.css';
import AdminListings from './components/admin/AdminListings';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminMenu from './components/admin/AdminMenu';
import CreateListing from './components/listing/CreateListing';
import Browse from './components/listing/Browse';

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
						<Route exact path="/admin-dashboard" component={AdminDashboard} />
						<Route exact path="/admin-listings" component={AdminListings} />
						<Route exact path="/browse" component={Browse} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/create-listing" component={CreateListing} />
					</Switch>
				</div>
				</Router>
		  </Provider>
		);
	}
}
export default App;
