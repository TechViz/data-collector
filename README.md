# Tech Viz

This repository containing the code for the _Tech Viz Data Collector_'s frontend

A link to the production software can be found [here](http://techviz.me/).

## What technologies does this use?

- [`next`](https://nextjs.org/) (and `react`, as consequence)
- [`styled-components`](https://styled-components.com/)
- [`typescript`](https://www.typescriptlang.org/)
- [`imagemin-webp-webpack-plugin`](https://github.com/iampava/imagemin-webp-webpack-plugin) (and [`file-loader`](https://webpack.js.org/loaders/file-loader/) to allow this plugin to work).
- [`husky`](https://github.com/typicode/husky)
- [`lighthouse`](https://github.com/GoogleChrome/lighthouse) for quality control of the whole page.

## Dependencies

The only dependencies to run this project is having `Node.js` and `npm`.

## How to run?

1. Clone this repository
2. run `npm install`
3. run `npm run dev`
4. Open your favorite browser on `http://localhost:3000`

## How to deploy?

This project is currently being automatically hosted on [netlify](https://www.netlify.com/). In order to update netlify's instance, just commit and push to master
