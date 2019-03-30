Make an API of your choosing
Objective
You and your partner will be building an API using Spring Boot to catalog some collection of data. It is up to the two of you exactly what it is you want your API to contain. This could be a collection of movies and their individual details, astronauts and their mission details, or a list of histories most significant programmers and their contributions. You can also catalog fictional data (so long as it's appropriate!).

You will also build a corresponding Single Page App (SPA) that will use your API to present this data. You are free to use React if you feel like you have a good enough handle on it, but it is not required. You are, however, required to build a modular JavaScript application. So, if you use Create React App, this functionality is natively built in. If you are not, you will have to setup a bundler of your own. I HEAVILY suggest Parcel for this as it doesn't require any configuration. You should follow the same component and utility based structure that we did for Module 5 with a single app.js access point at the root of your application.

Your front and back end should be totally decoupled for this project (so no need to bundle until the very end!) This means you should have two project directories. You may house them in the same root project directory though you can just have two separate repositories. If you choose to house both in one project directory (recommended). It should look like this:

my-project (This is where your Git repo will be)
|- my-project-api (All Spring Boot Material)
|- my-project-front-end (All front end material)
Tasks
Back-end/API
Your back end should be responsible ONLY for creating, reading, updating, and deleting data. Your database will be connected here as well so that your data can be persisted. Your RestControllers should send/receive JSON data.

You must have multiple entities that interact with each other in some way.

API Interactions:
All CRUD operations for all entities
A root endpoint for all entities
Endpoints for individual instances of all entities
Relationships
Make appropriate relationships between entities and map them such that you can access lower level entities from parent entities.

Front-end
Our front-end should be an SPA that uses JS to build out components that our users can interact with. Use modular JS along with parcel to create reusable components.

Users should be able to add new entities, remove existing entities, and update existing entities.
