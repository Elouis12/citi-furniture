# citi-furniture
LOOK AT THIS README IN THE CODE VIEW

For the citi-furniture hackathon this will be the example blueprint to follow
We will be creating a web application using reactJS to create a bot using GPT4 API.
This bot will be a interior designer reccomending citi furniture products based on user input or pictures. If a picture is given, the bot will assign a product and display what the product would look like in the RoomView

**Citi Furniture Interior Designer Chatbot Documentation**

**Overview**
The project aims to create an interior design recommendation system using the GPT-4 API, where users can get suggestions for Citi Furniture products. Users have the option to upload a picture of their room to visualize the product or simply get a link to the product on the Citi Furniture website.

**Architecture**
Outlined earlier, but to reiterate:

**assets/: Houses static images and icons.
components/: Contains all reusable React components.
services/: Used for utilities and functions related to external services.
styles/: Contains global styles.**


**Components & Services Description**
Chat Component: Allows the user to interact with the GPT-4 powered chatbot and provide details or preferences.
ProductLink Component: Displays a recommended Citi Furniture product with its image and a direct link.
RoomView Component: Visualizes how a recommended product might look in the user's room.
GPT-4 Service: Handles interactions with the GPT-4 API.
Product Service: Gets product details.
Image Service: Handles image manipulations.
