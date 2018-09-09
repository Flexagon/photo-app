import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SearchImages from '../Containers/SearchImages';
import Photos from '../Containers/Photos';
import FavoriteImages from './FavoriteImages';

const App = () => (
  <div>
    <header className="Header">
      <SearchImages />
      <nav>
        <ul className="Header-links">
          <li><Link className="Header-link" to="/">Home</Link></li>
          <li><Link className="Header-link" to="/favorite">Favorite</Link></li>
        </ul>
      </nav>
    </header>
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={Photos} />
          <Route path="/favorite" component={FavoriteImages} />
        </Switch>
      </main>
    </div>
  </div>
);

export default App;
