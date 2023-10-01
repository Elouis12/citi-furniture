let openai = require("../config/OpenAIConfig")
let replicate = require("../config/ReplicateAIConfig")


const getAIResponse = async (content) => {

    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: content }],
    });

    let message = chatCompletion.data.choices[0].message;

    return message;
};

const generateImage = async (content) => {

    const image = await openai.createImage({
        prompt: content,
        n: 1,
        size: '1024x1024'
    });

    console.log(image.data.data[0].url);



    return "message";
};

const getImageDescription = async (file, question) => {


    const output = await replicate.run(
        "andreasjansson/blip-2:4b32258c42e9efd4288bb9910bc532a69727f9acd26aa08e175713a0a857a608",
        {
            input: {
                image: file,
                question: question,
                
            }
        }
    );

    return output;
}

module.exports = { generateImage, getImageDescription, getAIResponse };



