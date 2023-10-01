let express = require("express");
let app = express();
let cors = require("cors");

let {generateImage, getImageDescription, getAIResponse} = require ("./controller/AIGenerationController");
let furnituredata = require("./model/furnituredata")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: 'http://localhost:3000', // Replace this with the actual URL of your React client
    methods: ['GET', 'POST'],
}));
app.enable('trust proxy');

app.post('/get-furniture', async (req, resp)=>{

    const {url, userPrompt} = req.body;
    let AIResponse;
    let formattedResponse;

    // get the description of the room
    const generalDescription = await getImageDescription(url, "Describe this room");
    const roomTypeDescription = await getImageDescription(url, "In a home, what room would this be?");
    const furnitureDescription = await getImageDescription(url, "What furniture are in this image");

    const roomDescription = generalDescription + "\n" + furnitureDescription + "\n" + roomTypeDescription;

    AIResponse = await getAIResponse("Fix any grammatical errors and bad sentence structures so it can sound concise (return the description ONLY) " + roomDescription );

    let formattedRoomDescriptionResponse = AIResponse.content;

    // console.log(formattedRoomDescriptionResponse);

    let listOfFurnitures = [];

    for (const entry of Object.entries(furnituredata)) {

        const [key, value] = entry;

        let prompt;

        if( userPrompt === "" ){

            prompt = `Based on this room description: ${roomDescription} + \n`;

        }else{

            prompt = `Here is the user prompt ${userPrompt}. Based on this room description: ${roomDescription} and the user's prompt \n`;

        }

        for(let x = 0; x < value.length; x++){

            prompt += `should we take in this furniture item (as long as the total price is not over the budget, try to consider the furniture with the room description)? ${value[x].description} with a price of ${value[x].price} \n`;
            prompt += `respond with yes or no and also explain why (let your first word be either yes or no, followed by the reason)`;

            AIResponse = await getAIResponse(prompt);

            formattedResponse = AIResponse.content;

            console.log(formattedResponse);

            if(formattedResponse.toLowerCase().includes("yes")){
                listOfFurnitures.push(value[x]);
            }
        }
    }

    resp.json({

        roomDescription : formattedRoomDescriptionResponse,
        listOfFurnitures : listOfFurnitures
    });

})


app.listen(5001, ()=>{


    console.log("Listening on port 5000")
})
