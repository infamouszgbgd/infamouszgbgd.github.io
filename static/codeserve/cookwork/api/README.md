This is the main backend API for the cookwork project.

## `npm run dev`

To run the server in development mode you will first need to set up a development mongodb database (you can use mongorestore on one of the production db backups), add the database uri to the .env file, then use `npm run dev` from the project directory.

## `npm run prod`

To run the server in production mode, use `npm run dev` from the project directory or `pm2 run backend` from the production server's terminal.

## `npm test`

To run all unit and integration tests, use `npm test` from the project directory.

## `npm run docs`

To generate up-to-date API documentation from the code and open it in the browser, run `npm run docs`

## `npm run postdocs`

To open the existing API documentation in the browser, run `npm run postdocs`

This project was generated by [generator-rest](https://github.com/diegohaz/generator-rest), therefore the info from generator-rest-README.md applies as well.