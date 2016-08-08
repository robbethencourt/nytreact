var React = require('react');
var helpers = require('../utils/helpers');

var Search = React.createClass({

	getInitialState: function() {
		return {
			search_topic: '',
			start_year: '',
			end_year: ''
		}
	},

	changedData: function(event) {
		
		// resetting the state each time the user changes something in any of the inputs by setting teh id of the inputs to be the same as the key in the returned state object
		var key_state = event.target.id;
		this.setState({key_state: event.target.value});

	},

	queryData: function(event) {

		event.preventDefault();
		
		helpers.searchNYT(this.state.search_topic, this.state.start_year, this.state.end_year);

	},

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
								
							</div>
						</div>
					</div>
				</div>

			</div>

		)
	}

});

module.exports = Search;