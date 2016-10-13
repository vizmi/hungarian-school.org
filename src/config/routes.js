import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import NotFoundPage from '../containers/NotFoundPage';
import ContactPage from '../containers/ContactPage';
import JoinPage from '../containers/JoinPage';
import HomePage from '../containers/HomePage';
import WhatPage from '../containers/WhatPage';
import WhoPage from '../containers/WhoPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="contact" component={ContactPage} />
    <Route path="join" component={JoinPage} />
    <Route path="what" component={WhatPage} />
    <Route path="who" component={WhoPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
