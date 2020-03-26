## JavaScript Frameworks Course Assignment

## Instructions:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You can use either React or Vue for the assignment, and you can use any React or Vue UI library (such as React Boostrap, Material UI or Bootstrap Vue) or write your own styles.

We will be using the RAWG Video Games Database API for the assignment.

The base URL for the calls will be

https://api.rawg.io/api/games

Only Level 1 is required, 2 and 3 are optional

## Level 1
Create a menu with the following paths:

/ - home page
/contact

You will need to create routes for these as well as a route for the details page. This route can be /game/:id

## Home page:
Make a call to the base URL and display the games returned.

Each game should display the following:

- Title
- Image
- Rating
- Release date
- A button/link, that takes the user to the game details page with the game id in the path (URL).

(Always remember to inspect the results of on API calling using console.log or console.dir to see what the API returns and what properties are available).

There should be a search box above the results that filters the games on their titles.

## Game details page:
Retrieve the id from the URL, add it to the base URL and make an API call with this new URL.

Display the following with the results of the call:

- Title
- Image
- Description
- Website link

## Contact page:
This page should contain the following inputs and validation rules:

- First name - required, minimum 2 characters
- Last name - required, minimum 2 characters
- Email - required, must be in a valid email format
- Message - required, minimum 10 characters.
- Ideally the form should display a message above itself if validation passes.
