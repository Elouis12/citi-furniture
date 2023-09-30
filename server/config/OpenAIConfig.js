let { Configuration, OpenAIApi } = require("openai");
let dotenv = require("dotenv");
dotenv.config();


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = openai;