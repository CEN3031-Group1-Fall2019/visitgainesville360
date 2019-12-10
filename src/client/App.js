import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import Login from './components/login/Login';
import Register from './components/login/Register';
import DashboardPlaceholder from './components/dashboard/DashboardPlaceholder';
import Menu from './components/Menu';
import store from "./store";
import './App.css';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminMenu from './components/admin/AdminMenu';
import CreateListing from './components/listing/CreateListing';
import CreateTags from './components/listing/CreateTags';
import Browse from './components/listing/Browse';
import ViewListing from './components/listing/ViewListing';
import AdminListings from './components/admin/AdminListings';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
				<div className="App container min-100">
					<Menu />
					<AdminMenu />
					<Switch>
						<Route exact path="/samplepage" component={DashboardPlaceholder} />
						<Route exact path="/admin-dashboard" component={AdminDashboard} />
						<Route exact path="/listing/:listingId" component={ViewListing} />
						<Route exact path="/admin-listings" component={AdminListings} />
						<Route exact path="/browse" component={Browse} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/create-listing" component={CreateListing} />
						<Route exact path="/create-tags" component={CreateTags} />
					</Switch>
				</div>
				</Router>
		  </Provider>
		);
	}
}
export default App;
