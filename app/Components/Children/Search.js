var React = require('react');
var helpers = require('../utils/helpers');

var Search = React.createClass({

	getInitialState: function() {
		return {
			search_topic: '',
			start_year: '',
			end_year: '',
			nytdata: []
		}
	}, // end getInitialState()

	changedData: function(event) {
		
		// resetting the state each time the user changes something in any of the inputs by setting teh id of the inputs to be the same as the key in the returned state object
		this.setState({[event.target.id]: event.target.value});

	}, // end changedData

	queryData: function(event) {

		event.preventDefault();

		// call the function below in the helpers.js file		
		helpers.searchNYT(this.state.search_topic, this.state.start_year, this.state.end_year)
			.then(function(data) {

				// set the state of nytdata to all the data returned from the ny times api so we can map through it and display it to the screen below
				this.setState({nytdata: data});

		// .bind so we have this refering to the object returned
		}.bind(this));

	}, // end queryData()

	render: function() {
		
		return (

			<div className="container">

				<div className="row">
					<div className="col-md-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h2>Search</h2>
							</div>
							<div className="panel-body">
								<form>
									<div className="form-group">
										<label>Topic</label>
										<input type="text" className="form-control" id="search_topic" onChange={this.changedData} />
									</div>
									<div className="form-group">
										<label>Start Year</label>
										<input type="text" className="form-control" id="start_year" onChange={this.changedData} />
									</div>
									<div className="form-group">
										<label>End Year</label>
										<input type="text" className="form-control" id="end_year" onChange={this.changedData} />
									</div>
									<a href="" className="btn btn-primary" onClick={this.queryData} >Submit</a>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h2>Results</h2>
							</div>
							<div className="panel-body">

								{/* loop through the articles returned and display to screen with a save button */}
								{this.state.nytdata.map(function(article, i) {

									return <p key={i}><a href="" className="btn btn-primary">Save</a> <a href={article.url}>{article.title}</a></p>

								})}

							</div>
						</div>
					</div>
				</div>

			</div>

		) // end return()

	} // end render()

}); // end Search

module.exports = Search;