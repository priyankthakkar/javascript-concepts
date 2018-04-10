const axios = require('axios');

// problem statement: write a program which takes movie id as a parameter and returns the movie poster

// async-await, is a new feature introduced for ECMA script
// What exactly it means for us?
// Well, it says, if you have marked a function async, it means you use await keyword with statements returning promise
// function fetchMovieDetails() is marked async, and statement axios.get() returns a promies, it means we can use keyword await
// and what does await do? it waits for the promise to be resolve() or reject()
// What's the purpose behind this mechanism?
// Well the purpose is, make the aysnc code look like synchronouse code, which increases the readability
// the equivalent promise based code may look like

// function fetchMovieDetails(id) {
//     const MOVIE_URL = `http://www.omdbapi.com/?i=${id}&apikey={apikey}`;
//     axios
//         .get(MOVIE_URL)
//         .then(response => console.log(response.data));
// };

async function fetchMovieDetails(id) {
    const MOVIE_URL = `http://www.omdbapi.com/?i=${id}&apikey={apikey}`;
    const response = await axios.get(MOVIE_URL);

    // we can now read  the response returned and log the required data here
    if(response && response.data) {
        console.log('fetchMovieDetails() Poster: ', response.data.Poster);
    }
    const data = await response.data;

    // but we need to remember this part
    // anything being returned from an async function is a promise
    return data;
};

const result = fetchMovieDetails('tt3896198');

// the statement logged will clearly show that we have received the promise
console.log('logging result directly: ', result);

// the promise returned is resolved here
result
    .then(movie => console.log('Actual result: ', movie.Poster));