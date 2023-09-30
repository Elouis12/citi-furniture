# citi-furniture
**Citi Furniture Interior Designer Chatbot Documentation**

For the citi-furniture hackathon this will be the example blueprint to follow
We will be creating a web application using reactJS to create a bot using GPT4 API.
This bot will be a interior designer reccomending citi furniture products based on user input or pictures. If a picture is given, the bot will assign a product and display what the product would look like in the RoomView



**Overview**

The project aims to create an interior design recommendation system using the GPT-4 API, where users can get suggestions for Citi Furniture products. Users have the option to upload a picture of their room to visualize the product or simply get a link to the product on the Citi Furniture website.

**Architecture**

Outlined earlier, but to reiterate:

assets/: Houses static images and icons.

components/: Contains all reusable React components.

services/: Used for utilities and functions related to external services.

styles/: Contains global styles.



**Components & Services Description**

Chat Component: Allows the user to interact with the GPT-4 powered chatbot and provide details or preferences.
ProductLink Component: Displays a recommended Citi Furniture product with its image and a direct link.
RoomView Component: Visualizes how a recommended product might look in the user's room.
GPT-4 Service: Handles interactions with the GPT-4 API.
Product Service: Gets product details.
Image Service: Handles image manipulations.




# GITHUB COMMANDS BEFORE PUSHING TO THE MAIN BRANCH

git checkout -b [branchname] //Navigates to the branch for the push

git push -u origin [branchname] //Push to the target branch

git status //checks on the current state of your repository

git add . //prepares to add the project from the push

git  commit -m "whatever message" //sends the project to github for approval



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# citi-furniture

For the citi-furniture hackathon this will be the example blueprint to follow
We will be creating a web application using reactJS to create a bot using GPT4 API.
This bot will be a interior designer reccomending citi furniture products based on user input or pictures. If a picture is given, the bot will assign a product and display what the product would look like in the RoomView

**Citi Furniture Interior Designer Chatbot Documentation**

**Overview**

The project aims to create an interior design recommendation system using the GPT-4 API, where users can get suggestions for Citi Furniture products. Users have the option to upload a picture of their room to visualize the product or simply get a link to the product on the Citi Furniture website.

**Architecture**

Outlined earlier, but to reiterate:

assets/: Houses static images and icons.

components/: Contains all reusable React components.

services/: Used for utilities and functions related to external services.

styles/: Contains global styles.



**Components & Services Description**

Chat Component: Allows the user to interact with the GPT-4 powered chatbot and provide details or preferences.
ProductLink Component: Displays a recommended Citi Furniture product with its image and a direct link.
RoomView Component: Visualizes how a recommended product might look in the user's room.
GPT-4 Service: Handles interactions with the GPT-4 API.
Product Service: Gets product details.
Image Service: Handles image manipulations.

