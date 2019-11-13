import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";

import Login from './components/login/Login';
import Browse from './components/listings/Browse';
import Register from './components/login/Register';
import DashboardPlaceholder from './components/dashboard/DashboardPlaceholder';
import Menu from './components/Menu';
import CreateListing from './components/dashboard/CreateListing'
import store from "./store";
import './App.css';
import Featured from './components/listings/Featured';

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
						<Route exact path="/create" component={CreateListing} />
						<Route exact path="/browse" component={Browse} />
						<Route exact path="/featured" component={Featured} />
					</Switch>
				</div>
				</Router>
		  </Provider>
		);
	}
}
export default App;
