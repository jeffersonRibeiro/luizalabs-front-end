import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import asyncComponent from './scenes/components/hoc/asyncComponent';

const Search = from('./scenes/Search');
const Favorites = from('./scenes/Favorites');

function from(path) {
  return asyncComponent(() => {
    return import(`${path}/index.js`);
  });
}

export default () => (
  <Switch>
    <Route path="/search" component={Search} />
    <Route path="/favorites" component={Favorites} />
    <Redirect to="/search" />
  </Switch>
);
