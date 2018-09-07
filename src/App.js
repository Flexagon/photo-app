import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Photos from './Pages/Photos';
import FavoritePhotos from './Pages/FavoritePhotos';

const App = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Photos</Link></li>
          <li><Link to="/favorite-photos">FavoritePhotos</Link></li>
        </ul>
      </nav>
    </header>
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={Photos} />
          <Route path="/favorite-photos" component={FavoritePhotos} />
        </Switch>
      </main>
    </div>
  </div>
);

export default App;
