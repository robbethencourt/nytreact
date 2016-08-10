var React = require('react');

var Saved = React.createClass({

	render: function() {
		
		return (

			<div className="container">

				<div className="row">
					<div className="col-md-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h2>Saved Articles</h2>
							</div>
							<div className="panel-body">
								{this.props.articles.map(function(search, i) {
									return <p key={i}><a href="" className="btn btn-danger" id={search._id}>Delete</a> <a href={search.article_url}>{search.article_title}</a> <span>{search.article_pub_date}</span></p>
								})}
							</div>
						</div>
					</div>
				</div>

			</div>

		)
	}

});

module.exports = Saved;