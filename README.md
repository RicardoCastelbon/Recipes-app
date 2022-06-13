# Recipe App
> The project consist in the creation of a Recipe App fetching recipes from https://spoonacular.com/food-api API. There is also a backend where is a Auth and list system so the users register and login and then can save their favorite recipes in lists.
> Live demo [_here_](https://recipe-app-castelbon.netlify.app/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Information
- The purpose of the project is to create a fullstack app, first using Angular 13 and Laravel 9:
1. Create a frontend that interacts with an external Api https://spoonacular.com/food-api.
2. Create a backend with and auth and list system that the frontend can interact with
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->

## Technologies Used
- Angular 13
- Laravel 9

## Features
List the ready features here:
- Search and filter recipes by name, type of diet and type of meal.
- Register and login system. In dashboard page the user can create lists and check the recipes in those lists.
- If the user is logged in it is possible to add recipes to the lists created.

## Setup
Previous requirements:
- Node.js & Angular CLI
- Docker
- Composer & Laravel
# Frontend
1. Install all the dependencies using:
```
npm install
```
2. Start serving with:
```
ng serve
```
# Backend
1. Mount the container with:
```
docker compose up
```
2. Attach shell and install laravel dependencies with:
```
composer install
```
3. Make an .env file with the following variables inside:
```
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=recipeappdb
DB_USERNAME=root
DB_PASSWORD=example
```
4. Start the server with:
```
php artisan serve --host 0.0.0.0 --port 8000
```

## Project Status
Project is: _in progress_

## Room for Improvement
- Improve UI interaction
- Add more filters

## Contact
Created by [@RicardoCastelbon](https://github.com/RicardoCastelbon) - feel free to contact me!


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->

