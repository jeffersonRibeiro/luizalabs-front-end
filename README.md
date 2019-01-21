## Luizalabs Front End Test [![CircleCI](https://circleci.com/gh/jeffersonRibeiro/luizalabs-front-end.svg?style=shield&circle-token=5a8843f9fcb781df4aa43bc76fc0f1460e012f8a)](https://circleci.com/gh/jeffersonRibeiro/luizalabs-front-end)

<p align="center">
  <img src="./doc/app-demo.png">
</p>

## [Live Demo](https://luizalabs-229113.firebaseapp.com/)

#### Features

- Search for a CEP and add to favorites
- Favorite list persist after page reload
- Responsive
- **Unit tests, integration tests**
- **CircleCI Continuous Integration and Deployiment with Firebase**

#### Using

- React
  - Redux - state management
- Axios - for promise HTTP requests
- CSS
  - BEM methodology
  - SASS
- Moxios - to stub http request
- Enzyme - to mount, shallow, render and query the DOM tree of React components
- Native local storage - to persist products in cart even after page reload
- CircleCI
- Firebase

## About tests

- Unit tests
  - All components have at least a basic smoke test
- **Integration tests**
  - **Search for a CEP and add place to favorite**

### Coverage report

![coverage](./doc/coverage-report.png 'coverage')

## Build/Run

#### Requirements

- Node.js
- NPM

```javascript

/* First, Install the needed packages */
npm install

/* Then start both Node and React */
npm start

/* To run the tests */
npm run test

```

<br/>
<br/>

<p align="center"><img src="https://avatars2.githubusercontent.com/u/20846473?s=70&v=4" width="35" height="35"/></p>
<p align="center">
<sub>A little project by <a href="http://www.jeffersonribeiro.com/">Jefferson Ribeiro</a></sub>
</p>
