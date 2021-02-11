# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Algorithms and Outlines

Below is our list of algorithms from trello and their tl;dr - claim the one you want!

## BFS / DFS

Two sides of the same coin -

DFS: arbitrarily pick nodes around the start node that we haven't visited before, rinse and repeat. The idea is to NOT pick nodes that we've visited, in order to keep going deeper into the path, blindly. If we reach a spot with no available nodes, we start over (?)

BFS: In this case we're not really exploring a path, but the nodes immediately around the start. In order of how many steps they are away from the start, we check each available node, blindly.

## Djikstra's

Simplest 'decision making' algorithm by picking the next, lowest cost node available until the destination is reached

## A*

A more complicated 'best first' search that utilizes Djikstra's but adds an additional layer - in the cost analysis of a node, we also consider how far the node is from the start. The variance between A* implementations is the heuristic - the cost estimator.

## D*

There are multiple versions of this, but all of them are incremental heuristic searches. One main difference is that D* starts from the goal node and searches backwards. Additionally, nodes can have their cost increased if they are near obstacles encountered.

## XYZ Open Algorithm


# Outline for Use

## One Page Application

Ideally, we can fit all of our application onto one page. The page will show (at least) four grids with a path that was calculated by (at least) four different algorithms.

## Showcase of Each Algorithm

Each algorithm will (hopefully) show all start, end, chosen, considered, and blocked nodes in its grid. This helps get a better view of the algorithm as a whole.
Additionally, we will include metrics on algorithm performance like run time, steps taken, etc.

## Potential Areas for Interaction

We have a couple options for interaction on the front end once the algorithms are built.

For one, we can place a multitude of algorithms onto the same grid or path by the click of each button. For example, clicking 'A*' would show that algorithm's path, and clicking 'BFS' would overlay its own path onto the same grid. 

For a different option, we could allow users to place blockades within the four grids or modify the start and end locations.
