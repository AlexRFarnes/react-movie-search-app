const axios = require("axios");
const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1&include_adult=false&query=`;

exports.handler = async function (event, context) {
  try {
    const { inputQuery } = event.queryStringParameters;
    const response = await axios.get(`${url}${inputQuery}`);
    return {
      statusCode: 200,
      body: JSON.stringify({ data: response.data }),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
