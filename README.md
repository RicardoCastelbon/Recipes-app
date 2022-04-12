# Recipe App

## Stack & resources
Angular 13 frontend + Laravel 9 API backend

https://spoonacular.com/food-api

## Description
The project consist in the creation of a Recipe App fetching recipes from an external API. There is also a backend developed with Laravel 9 where is a Auth and list system so the users can save their favorite recipes.

## Installation
Prerequisites: Angular, Laravel & Docker
1. In the frontend folder execute "ngserve" to serve the frontend
2. In the root of the backend folder execute "docker compose up" to create the container
3. Atach shell and execute php artisan serve --host 0.0.0.0 --port 8000  serve the backend.(DB info: server->db, user->root, password-> example)

## Steps in develpment
1. Creation & structure of angular project. It consists in 3 modules: The root module, auth module and recipe module.
2. Develop of the frontend and fetch the recipes info from the https://spoonacular.com/food-api API.
3. Creation of the auth & list Api
4. Integration of the frontend and the backend

## Problems in development
1. The integration of the frontend and the backend gave me problems and I haven't been able to finish complete the list system.
2. The Heroku dashboard doens't gives the following error: Item could not be updated. Unknown error. Contact the support


