// this example is using the free APIs exposed by http://www.omdbapi.com/
// to use this, register over their website and they will email you api key immediately

const axios = require('axios');
const GOTG_URL = "http://www.omdbapi.com/?i=tt3896198&apikey={apikey}";

// axios is a promise based library to make ajax request
// there are two ways to do async tasks
// 1. callback: they are very easy to understand, they are functions
// the callback function has to handle both success and error scenarios.
// It is tough to handle callbacks when we have to make ajax/async requests in paraller
// or there is a chaining of request which required
// this leads to pyarmid pattern in code, also known as callback hell.
// This reduces readability and maintainibility of the code

// 2. Promises on the other hand, they are immutable objects
// they handle success (resolve) and error (reject) scenarios separatly.
// Promises allow chaining, but how do they achieve
// It is very simple, every thing returned from promies, reject or resolve is a promies
// look at the following example
// when I execute axios.get() I receive promies,
// when I receive reposne, I return response.data, that is also being returned as promies
// which in turn allows me to chain the function further with .then() and let me extract the Poster URL
axios
	.get(GOTG_URL)
	.then(response => {
		if(response && response.data)
			return response.data;
		
		return {
			Poster: 'No poster URL found'
		}
	})
	.then(movie => {
		console.log("Poster URL: ", movie.Poster);
	})
	.catch(error => {
		console.log(error);
	});


// Problem statement: You are given an array for three movie ids, fetch their data and get the URL to their movies Posters,
// and as they are independent of each other, make these request parallaly

const movieIDs = ["tt0816692", "tt1323594", "tt0251504"];

// we use the map function on movieIDs array, and transform them into axios.get() promies
const promises = movieIDs
			.map(id => axios.get(`http://www.omdbapi.com/?i=${id}&apikey={apikey}`));

// now we wait for the all these requests to get resloved
// once they are resolved, we receive their response together under .then()
// iterate over it and extract the result
axios
	.all(promises)
	.then(response => response.forEach(r => console.log(r.data.Poster)));

