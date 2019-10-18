This is a case study project. I was provided a design and some assets and a deadline of 2 days. In the 15 hours I spent on this project, I focused on setting up a good scalable structure, types, generic functions and automated testing. I also integrated Storybook to develop components in isolation as well as provide deployed documentation for the component APIs.

The state of the app is managed using hooks as all components are functional components. I first attempted useReducer, but it wasn't working as expected, so I switch back to useState which is fine for such a small and simple app. Redux would also be an option as complexity increases.

Notable features:

**JavaScript**: Uses TypeScript and functional components only.

**CSS**: Uses CSS custom properties and CSS modules for style scoping. Each CSS module first redeclares all CSS variables used so it's easy to see what variables are used right at the beginning of each CSS module. Standard unit for paddings/margins are used and easily adjusted globally by adjusting one value.

**Testing**: Jest w/ Enzyme for snapshot testing. Most non-render functions are factored out into a service for easier unit testing.

**Development**: Storybook to allow developing components in isolation.

[Link to deployed app](https://todo.chiangs.dev)

[Link to deployed Storybook](https://todostories.chiangs.dev)

## Notes on provided design

- 3 types of fonts, only 1 used one time
- Unclear hover/focus state for todo item because it is in mobile screen which doesn't have it.
- Where is the edit ui or is it inline?
- font sizes are too small

## Improvements

- Check a11y thoroughly
- Memory improvements
- Update images to not have padding outside (clip it)
- Additional documentation in Storybook
- Improve hover, focus, and active styles
- Animations
- Improved responsive font scaling
- Unit tests for the service methods
- Additional snapshot testing
- Possible use moment.js to have more control over Date/Time

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
