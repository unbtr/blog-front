import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import New from './components/New';
import Post from './components/Post';
import Edit from './components/Edit';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/new" component={New} />
    <Route exact path="/p/:id" component={Post} />
    <Route path="/p/:id/edit" component={Edit} />
  </Switch>
);

export default Routes;