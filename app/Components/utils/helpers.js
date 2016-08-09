var axios = require('axios');

var helpers = {

	// this function being called on the Search component file and beign passed in the input values to build the query url below
	searchNYT: function(searchTopic, startYear, endYear) {

		var nytAPI = 'c93c620e2666430ab20bf934eca8d8d6';
		
		// build the query url for the new york times api
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=";
			queryURL += searchTopic;
			queryURL += "&begin_date=" + startYear + "0101";
			queryURL += "&end_date=" + endYear + "0101";

		// ajax call to the new york times articles search api using axios
		return axios.get(queryURL)
			.then(function(nytdata) {

				// store the articles returned in a variable
				var articles = nytdata.data.response.docs;

				// map through the array and build an object for each article that holds the data we need to pass back to the Search component
				var articles_obj_array = articles.map(function(article) {
					var articlesObj = {
						title: article.headline.main,
						pub_date: article.pub_date,
						url: article.web_url
					};
					return articlesObj;
				});

				// return the object to have access to it on the .then callback in the Search component
				return articles_obj_array;

		}); // end axios.get()

	} // end searchNYT()

} // end helpers

module.exports = helpers;