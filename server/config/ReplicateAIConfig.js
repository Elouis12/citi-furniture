const Replicate = require("replicate");

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_KEY,
});

module.exports = replicate;