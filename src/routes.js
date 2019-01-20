import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Search from './scenes/Search';
import Favorites from './scenes/Favorites';

export default () => (
  <Switch>
    <Route path="/search" component={Search} />
    <Route path="/favorites" component={Favorites} />
    <Redirect to="/search" />
  </Switch>
);
