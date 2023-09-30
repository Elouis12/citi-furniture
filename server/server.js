let express = require("express");
let app = express();
let cors = require("cors");
let {generateImage, getImageResponse} = require ("./controller/AIGenerationController");




app.use(cors({
    origin: 'http://localhost:3000', // Replace this with the actual URL of your React client
    methods: ['GET', 'POST'],
}));
app.enable('trust proxy');

generateImage("astronaut in space");
//getImageResponse(app);

/*app.listen(5000, ()=>{

    console.log("Listening on port 5000")
})
*/