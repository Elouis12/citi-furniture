let openai = require("../config/OpenAIConfig")
let replicate = require("../config/ReplicateAIConfig")

<<<<<<< HEAD
=======


const getAIResponse = async (content) => {

    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: content }],
    });

    let message = chatCompletion.data.choices[0].message;

    return message;
};


>>>>>>> f07c96e (worked on wrong branch)
const generateImage = async (content) => {

    const image = await openai.createImage({
        prompt: content,
        n: 1,
        size: '1024x1024'
    });

    console.log(image.data.data[0].url);

    // let message = image.data.choices[0].message;

    return "message";
};

<<<<<<< HEAD
const getImageResponse = async (file, question) => {
=======
const getImageDescription = async (file, question) => {
>>>>>>> f07c96e (worked on wrong branch)

    const output = await replicate.run(
        "andreasjansson/blip-2:4b32258c42e9efd4288bb9910bc532a69727f9acd26aa08e175713a0a857a608",
        {
            input: {
                image: file,
                question: question,
                // use_nucleus_sampling: true,
                // temperature: 7
            }
        }
    );

    console.log(output);

    return output;
}

<<<<<<< HEAD
module.exports = { generateImage, getImageResponse };
=======
module.exports = { generateImage, getImageDescription, getAIResponse };
>>>>>>> f07c96e (worked on wrong branch)

/*
let { Configuration, OpenAIApi } = require("openai");
let dotenv = require("dotenv");
dotenv.config();


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const getAIResponse = async (content) => {

    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: content }],
    });

    let message = chatCompletion.data.choices[0].message;

    return message;
};

module.exports = { getAIResponse };*/
