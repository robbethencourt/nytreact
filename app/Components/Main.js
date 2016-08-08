var React = require('react');
var Search = require('./Children/Search');
var Saved = require('./Children/Saved');
var helpers = require('./utils/helpers');

var Main = React.createClass({

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
					<Saved />
				</div>

			</div>

		);
	}

});

module.exports = Main;