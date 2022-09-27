#  Travel Tracker 

## Table of Contents
- [Contributors](#contributors)
- [Introduction](#introduction)
- [Links](#links)
- [Learning Goals](#learning-goals)
- [Setup](#setup)
- [Future Additions](#future-additions)
- [Technologies](#Technologies)


## Contributors
- [Piper Jarrett](https://github.com/piperjarrett)

## Introduction
Travel tracker is a webpage designed for a traveler to log in with a Username and password. Once logged in the traveler will be see their past trips taken and upcoming trips, they also will be able to choose from a list of destinations and dates, and enter the duration and passengers they would like to have for a trip. Once they have entered those fields a display of the trip they have chosen with an estimated cost will be shown. After submittin that trip it will be moved to the pending trips section and able to be viewed by an agent. 


## Links
- Project spec part 1![Screen Shot 2022-09-27 at 10 33 05 AM](https://user-images.githubusercontent.com/106850657/192583516-b9de50df-4b93-4db1-90a9-24d0aa7cbad8.png)
- Project spec part 2![Screen Shot 2022-09-27 at 10 22 37 AM](https://user-images.githubusercontent.com/106850657/192581603-f9fb2441-8586-4db9-892a-c4caaff2ff92.png)
- Giphy of application functionality 

![giphy](https://user-images.githubusercontent.com/106850657/192590659-952102ff-bde1-4786-89b1-bbb32e74781a.gif)


## Learning Goals 
- Use OOP to drive the design of the application and the code
- Work with an API to send and receive data
- Solidify the code review process
- Create a robust test suite that thoroughly tests all functionality of a client-side application

## Setup
1. Fork this [repo](https://github.com/turingschool-examples/webpack-starter-kit) - on the top right corner of the page, click the **Fork** button. 
2. Clone down the forked repo. To rename your project you can use an optional argument when you run git clone (you replace the [...] with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
3. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` to install project dependencies.
4. Run `npm start` in the terminal to see the HTML page running in your browser on `http://localhost:8080/`. `Control + C` is the command to stop running the local server.  Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems. This command is not specific to Webpack; make note of it for future use. 
5. Clone the [Travel Tracker API](https://github.com/turingschool-examples/travel-tracker-api) to a separate folder, CD into it and run `npm install`. 
6. The local server is now running on `https://localhost:3001/api/v1/activity` for example. Make sure to use `Control + C` to close the local server before closing the terminal when finished.
7. Enjoy!

## Future Additions
- Adding an agent login
- Allow agent to to see and approve pending trips
- Search a user, view their name, a list of trips, and amount the user has spent
- Approve trip request for given user I looked up
- Delete an upcoming trip for that user

## Technologies
- JavaScript
- HTML
-CSS
- Test driven development (using Mocha and Chai)
- Webpack
- Testing accessibility using LightHouse
- Network requests to fetch information from an API. 
