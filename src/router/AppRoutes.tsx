import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import HomePage from '../components/home-page/HomePage';
import Meetups from '../components/meetups/Meetups';
import Places from '../components/places/Places';
import Login from '../components/login/Login'
import Friends from '../components/friends/Friends';

const AppRoutes: React.FC<unknown> = () => {

  return (
    <>
      <Switch>
          <Route exact path='/meetups'>
            <Meetups />
          </Route>
          <Route path='/places'>
            <Places />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/friends'>
              <Friends />
          </Route>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/'>
            <Redirect to='/' />
          </Route>
      </Switch>
    </>
  );
}

export default AppRoutes;