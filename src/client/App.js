import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import Login from './components/login/Login';
import Register from './components/login/Register';
import EditLogin from './components/login/EditLogin';
import DashboardPlaceholder from './components/dashboard/DashboardPlaceholder';
import Menu from './components/Menu';
import store from "./store";
import './App.css';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminMenu from './components/admin/AdminMenu';
import CreateListing from './components/listing/CreateListing';
import CreateTags from './components/listing/CreateTags';
import DeleteListing from './components/listing/DeleteListing';
import EditListing from './components/listing/EditListing';
import Browse from './components/listing/Browse';
import ViewListing from './components/listing/ViewListing';
import AdminListings from './components/admin/AdminListings';
import AdminDenied from './components/admin/AdminDenied';
import AdminUsers from './components/admin/AdminUsers';
import LandingPage from './components/LandingPage';
import UsersListings from './components/dashboard/UsersListings';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
				<div className="App">
					<Menu />
					<AdminMenu />
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/samplepage" component={DashboardPlaceholder} />
						<Route exact path="/admin-dashboard" component={AdminDashboard} />
						<Route exact path="/listing/:listingId" component={ViewListing} />
						<Route exact path="/account/listings/:userId" component={UsersListings} />
						<Route exact path="/admin-listings" component={AdminListings} />
						<Route exact path="/admin-users" component={AdminUsers} />
						<Route exact path="/admin-denied" component={AdminDenied} />
						<Route exact path="/browse" component={Browse} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/create-listing" component={CreateListing} />
						<Route exact path="/delete-listing" component={DeleteListing} />
						<Route exact path="/edit-listing" component={EditListing} />
						<Route exact path="/edit-login" component={EditLogin} />
						<Route exact path="/create-tags" component={CreateTags} />
					</Switch>
				</div>
				</Router>
		  </Provider>
		);
	}
}
export default App;
