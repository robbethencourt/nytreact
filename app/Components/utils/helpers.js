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

	}, // end searchNYT()

	// post the article to the db
	postArticle: function(article_to_post) {
		
		// console.log(article_to_post);

		// use axios to grab the post route defined in our server.js file so we can post this article to the db
		return axios.post('/api',article_to_post)
			.then(function(results) {
				
				console.log('posted to mongo');
				// return(results);

		}); // end axios.post()

	}, // end postArticle()

	// get all the articles in the db
	getArticles: function() {
		
		// using axios to access the get route defined in server.js and will return all the articles in our db
		return axios.get('/api')
			.then(function(response) {

				// return response so we have access to it in main.js, which will then set the state and send it to saved.js
				return response;

		}); // end axios.get()

	} // end getArticles()

} // end helpers

module.exports = helpers;