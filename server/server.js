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

    const {url, price, demographic} = req.body;
    let AIResponse;
    let formattedResponse;


    // get the description of the room
    const generalDescription = await getImageDescription(url, "Describe this room");
    const roomTypeDescription = await getImageDescription(url, "In a home, what room would this be?");
    const furnitureDescription = await getImageDescription(url, "What furniture are in this image");
    const homeDecorDescription = await getImageDescription(url, "What home decors are in this image");

    const roomDescription = generalDescription + "\n" + furnitureDescription + "\n" + homeDecorDescription +  "\n" + roomTypeDescription;

    AIResponse = await getAIResponse("Fix any grammatical errors and bad sentence structures so it can sound concise. Here's an example of how it should sound like based on the description I give you: 'This room is empty with white walls and a glass door. This room also has not furniture'. Lastly, and this is VERY IMPORTANT make sure to return the rephrased description ONLY. So nothing like 'The description should be: 'An empty room with white walls and a glass door, without any furniture. It is a white room with a window, completely empty'. Just simply 'This is Aan empty room with white walls and a glass door, without any furniture. It is a white room with a window, completely empty'" + roomDescription );

    let formattedRoomDescriptionResponse = AIResponse.content;

    console.log(formattedRoomDescriptionResponse);

    let listOfFurnitures = [];

    for (const entry of Object.entries(furnituredata)) {

        const [key, value] = entry;

        let prompt = `You are an interior designer with an eye for putting designs together. ${price === null ? 'I have no budget' : `The maximum I will spend on an particular item is $${price}`}. Based on this room description: ${roomDescription}, help me select the best furniture piece that fits this room \n`;


        for(let x = 0; x < value.length; x++){

            prompt += `should we take in this furniture item (as long as the total price is not over the budget, try to consider the furniture with the room description)? ${value[x].description} with a price of $${value[x].price} \n`;
            prompt += `respond with yes or no and also explain why (let your first word be either yes or no, followed by the reason) AND make sure the item can fall within my budget`;

            AIResponse = await getAIResponse(prompt);

            formattedResponse = AIResponse.content;

            console.log(formattedResponse);
            console.log("\n-------------[][][][][][]--------------\n");

            if(formattedResponse.toLowerCase().includes("yes")){
                listOfFurnitures.push(value[x]);
            }

            prompt = `You are an interior designer with an eye for putting designs together. ${price === null ? 'I have no budget' : `The maximum I will spend on an particular item is $${price}`}. Based on this room description: ${roomDescription}, help me select the best furniture piece that fits this room \n`;

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
