var React = requier('react');
var ReactRouter = requier('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hasHistory = ReactRouter.hasHistory;
var app = requier('../app');
var Main = requier('../app/Components/Main');

var routes = (

	<Router history={hasHistory}>
		<Route path='/' component={app}>
			<IndexRoute component={Main} />
		</Route>
	</Router>

);

module.exports = routes;