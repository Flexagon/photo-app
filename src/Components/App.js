import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SearchImages from '../Containers/SearchImages';
import Photos from '../Containers/Photos';
import FavoritePhotos from './FavoritePhotos';

const App = () => (
  <div>
    <header className="Header">
      <SearchImages />
      <nav>
        <ul className="Header-links">
          <li><Link className="Header-link" to="/">Photos</Link></li>
          <li><Link className="Header-link" to="/favorite-photos">FavoritePhotos</Link></li>
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
