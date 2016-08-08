var helpers = {

	searchNYT: function(searchTopic, startYear, endYear) {

		var nytAPI = 'c93c620e2666430ab20bf934eca8d8d6';
		
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=";
			queryURL += searchTopic;
			queryURL += "&begin_date=" + startYear + "0101";
			queryURL += "&end_date=" + endYear + "0101";

		console.log(queryURL);

	}

}

module.exports = helpers;