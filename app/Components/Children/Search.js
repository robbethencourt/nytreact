var React = require('react');

var Search = React.createClass({

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
										<input type="text" className="form-control" id="search-topic" />
									</div>
									<div className="form-group">
										<label>STart Year</label>
										<input type="text" className="form-control" id="search-sy" />
									</div>
									<div className="form-group">
										<label>End Year</label>
										<input type="text" className="form-control" id="search-ey" />
									</div>
									<a href="" className="btn btn-primary">Submit</a>
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