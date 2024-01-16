# Cook Book Frontend Server

Cook Book is a social media web application for cooking enthusiasts. This repo contains the code for frontend. Frontend is built with lots of love, attention to detail, react.js, bootstrap, HTML and CSS.
The design is fully responsive and works smoothly on all screen sizes like tablet and mobile devices. For Backend Repo refer to: [backend](https://github.com/vivekananda-reddy/cookbook-node-server)

## Hosted At
(Backend is hosted on free instances of Render.com so it takes some time to spin up. After opening the below link wait for 2 mins and then refresh the page)
https://webdev-cookbook.netlify.app

## Features/ Demo

This entire application is built in MERN stack(MongoDb, Express, Nodejs, Reactjs). The application supports 3 different types of users: Admin, Chef, Regular Users. 

### Home Screen
Home screen displays one random recipe from a random category every day.
![Alt homepage](./UI%20screenshots/cookbookhome1.JPG)

For a logged-in user it also displays their recent activity.
![Alt homepage](./UI%20screenshots/userhome1.JPG)

### Search
Users can search for recipes with the search bar on the top. Search results are displayed as follows:
![Alt homepage](./UI%20screenshots/cookbooksearch1.JPG)

### Recipe Screen
Users can click on any recipe on the search results and view the recipe screen. The icons below the recipe picture display number of chef likes, user likes and if the logged in user has marked a recipe favorite.
Bottom of the screen we can view the reviews for recipes as well.
![Alt homepage](./UI%20screenshots/recipescreen1.JPG)

![Alt homepage](./UI%20screenshots/recipescreen2.JPG)

### Profile screen
Users can see their profile and any other user's profile. Update profile button is only visible to their own profile.

![Alt homepage](./UI%20screenshots/userprofile1.JPG)
![Alt homepage](./UI%20screenshots/userprofile2.JPG)

### Categories
All the recipes are categorized and that can be displayed by clicking on the category tab on the left.
![Alt homepage](./UI%20screenshots/categories.JPG)

### Community
The entire cookbook community can be viewed in community tab. Which displays their names, role and favorite food category.
![Alt homepage](./UI%20screenshots/communityscreen.JPG)

### Login/Signup

Login and Signup screens looks as below. If you like the application signup and join the network.
![Alt homepage](./UI%20screenshots/loginpage.JPG)
![Alt homepage](./UI%20screenshots/signuppage.JPG)


## Getting Started With Code

Install Node version 18.17.1 and React version 18.2.0. <br>
Clone the repo, in root directory run `npm install` wait for the dependencies to be installed then run `npm start`. 
To fully run the application back also should be setup, refer to [backend](https://github.com/vivekananda-reddy/cookbook-node-server) repo for instruction to setup backend server.
