# citi-furniture
For the citi-furniture hackathon this will be the example blueprint to follow
We will be creating a web application using reactJS to create a bot using GPT4 API.
This bot will be a interior designer reccomending citi furniture products based on user input or pictures. If a picture is given, the bot will assign a product and display what the product would look like in the RoomView


src/
│
├── assets/                   # Store static assets like images
│   ├── images/
│   │   ├── product1.jpg
│   │   ├── room1.jpg
│   │   └── ...
│   └── icons/
│       ├── chat-icon.svg
│       └── ...
│
├── components/               # Reusable components
│   ├── Chat/
│   │   ├── Chat.js
│   │   ├── Chat.css
│   │   └── ...
│   ├── Product/
│   │   ├── Product.js
│   │   ├── Product.css
│   │   └── ...
│   ├── RoomView/
│   │   ├── RoomView.js
│   │   ├── RoomView.css
│   │   └── ...
│   └── ...
│
├── services/                 # Services and utilities like API calls
│   ├── gpt4Service.js
│   ├── productService.js
│   └── ...
│
├── styles/                   # Global and theme styles
│   ├── index.css
│   ├── theme.css
│   └── ...
│
├── App.js                    # Main application view and logic
├── App.css                   # Main application styling
├── index.js                  # Entry point for the application
└── reportWebVitals.js        # Utility for measuring performance
