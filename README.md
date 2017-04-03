The Name Game
===================

This project is to build a Name Game to help learn employee names at WillowTree.  
The application is structured as a single page application built on React JS.

----------


Builds
-------------
In the builds folder you can find a recent version of the game as a production single page application.
This can be served up via any HTTP server, such as [the NodeJS http-server module](https://www.npmjs.com/package/http-server).

Running the Dev Server
-------------
To run the dev server, simply navigate to the root directory, and then run the following commands.
```
npm install
npm start
```

Game Modes
-------------
Marathon - Working
> **Game Description:**
> - Users are presented with 5 faces to name
> - Tracks current best marathon (correct answers in a row)
> - Tracks best marathon over a session
> - Keeps track of total correct/incorrect answers


Time Trial - Working
> **Game Description:**
> - Users are presented with 5 faces to name
> - Tracks time it takes to answer each question
> - Tracks fastest correct response time over a session
> - Keeps track of total correct/incorrect answers

Game Toggles
-------------
These features can be toggled on and off for all game modes.

Mat(t) Mode - Future
> **Toggle Description:**
> - All correct answers will be someone named Matt

Reverse Mode - Future
> **Toggle Description:**
> - Users will be presented with a face and pick from 5 names

Hints - Future
> **Toggle Description:**
> - Options will disappear over time

TO-DO/Wishlist
-------------
- Refactor existing codebase
- Store high scores in browser local storage
- Queue up image loading with an animation to displayreact