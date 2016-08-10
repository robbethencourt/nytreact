var React = require('react');
var Search = require('./Children/Search');
var Saved = require('./Children/Saved');
var helpers = require('./utils/helpers');

var Main = React.createClass({

	getInitialState: function() {
		return {
			articles: []
		}
	},

	// once the page loads get all the articles in the database
	componentDidMount: function() {
		
		// access helpers.js to use the getArticles function and access the get route defined in server.js
		helpers.getArticles()
			.then(function(response) {

				// set the state of articles with the articles stored in the database
				this.setState({
					articles: response.data
				})
				
		}.bind(this)); // end helpers.getArticles()


	}, // end componentDidMount()

	render: function() {
		
		return (

			<div>

				<div className="jumbotron">
					<div className="container">
						<h1>New York Times Article Scrubber</h1>
						<p>Search for and annotate articles of interest!</p>
					</div>
				</div>

				<div className="search">
					<Search />
				</div>

				<div className="saved">
					<Saved articles={this.state.articles} />
				</div>

			</div>

		);
	}

});

module.exports = Main;