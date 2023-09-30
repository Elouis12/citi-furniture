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

    const {url, price} = req.body;

    // get the description of the room
    const generalDescription = await getImageDescription(url, "Describe this image");
    const furnitureDescription = await getImageDescription(url, "What furniture are in this image");

    const roomDescription = generalDescription + "\n" + furnitureDescription;

    let listOfFurnitures = [];

    for (const entry of Object.entries(furnituredata)) {

        const [key, value] = entry;

        let prompt = `Our maximum budget ${price} is Based on this room description: ${roomDescription} + \n`;

        for(let x = 0; x < value.length; x++){

            prompt += `should we take in this furniture item (as long as the total price is not over the budget, try to consider the furniture with the room description)? ${value[x].description} with a price of ${value[x].price} \n`;
            prompt += `respond with yes or no and also explain why`;

            let AIResponse = await getAIResponse(prompt);

            let formattedResponse = AIResponse.content;

            if(formattedResponse.toLowerCase().includes("yes")){
                listOfFurnitures.push(value[x]);
            }
        }
    }

    resp.json(listOfFurnitures);

})


app.listen(5001, ()=>{

    console.log("Listening on port 5000")
})
