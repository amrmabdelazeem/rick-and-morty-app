# Rick and Morty NodeJS

Welcome to the Rick and Morty empire! This is a simple search application built using Node.js, EJS (Embedded JavaScript templates), TailwindCSS Axios and Rick and Morty API.
This project allows you to search with over 800+ indices of Rick and Morty characters, and search by name if it's the right name you'll get a random character from list of chars with the same name.


## Getting Started
To get started with the project, follow these steps:

## Prerequisites
* Make sure you have Node.js installed on your machine. If not, you can download it from [nodejs.org](https://nodejs.org/en).

## Installation
1.Clone the repository:
```
git clone https://github.com/amrmabdelazeem/rick-and-morty-app.git
```
2. Change into the project directory:
```
cd blog-nodejs-ejs
```
4. Install the dependencies:
```
npm install
```

## Usage
1. Start the application:
```
node index.js
```
OR
if you have nodemon installed:
```
nodemon index.js
```
hint: if you run just the command ```node``` or ```nodemon``` in the directory they can still run the server.

2. Open your web browser and navigate to http://localhost:3000 to access the Rick and Morty universe.

## Features

* **Search by Id** Search with Ids and get random character with some of their infos such as the name, species, origin and image.
*  **Search by name** You can also search by name and get a random char everytime holding the same name.

## Project Structure

* **index.js**: The main entry point of the application.
* **views/**: Contains the EJS templates for rendering the HTML pages.
* **public/**: Includes static assets such as stylesheets and images.
* **src/**: Includes main file for tailwindcss.

## Dependancies
* Express: A minimal and flexible Node.js web application framework.
* EJS: Embedded JavaScript templates for rendering dynamic content.
* Body-parser: Middleware for parsing incoming request bodies.
* Axios: a simple promise based HTTP client for the browser and node.js.

## Acknowledgments

Special thanks for the creators of the R&M API [rickandmorty](https://rickandmortyapi.com/).

Special thanks to the original author, [amrmabdelazeem](https://github.com/amrmabdelazeem/) , for creating this project.

Wubba Lubba Dub Dub!! 🥒🥒
