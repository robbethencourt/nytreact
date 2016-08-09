var axios = require('axios');

var helpers = {

	searchNYT: function(searchTopic, startYear, endYear) {

		console.log(searchTopic, startYear, endYear);

		var nytAPI = 'c93c620e2666430ab20bf934eca8d8d6';
		
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=";
			queryURL += searchTopic;
			queryURL += "&begin_date=" + startYear + "0101";
			queryURL += "&end_date=" + endYear + "0101";

		// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		// 	url += '?' + $.param({
		// 	  'api-key': "c93c620e2666430ab20bf934eca8d8d6",
		// 	  'q': searchTopic,
		// 	  'begin_date': startYear + '0101',
		// 	  'end_date': endYear + '0101'
		// 	});

		console.log(queryURL);

		return axios.get(queryURL)
			.then(function(nytdata) {

				var articles = nytdata.data.response.docs;

				articles.map(function(article) {
					console.log(article.headline.main);
					console.log(article.pub_date);
					console.log(article.web_url);
				});

		});

	}

}

module.exports = helpers;