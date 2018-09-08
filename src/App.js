import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Photos from './Pages/Photos';
import FavoritePhotos from './Pages/FavoritePhotos';
import ImagesList from './Components/ImagesList';
import SearchImages from './Components/SearchImages';

export default class App extends Component {
  state = {
    images: {},
  }

  componentDidMount() {
    this.getImages();
  }

  getImages = (query = 'surf') => {
    const key = '8c3fbb523f56915d91b90df43410e00bbe03eff259a671396d7f6b4ca1f6ce2a';

    fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=30&query=${query}&client_id=${key}`)
      .then(res => res.json())
      .then(data => this.setState({ images: data.results }))
      .catch(err => console.log('Error happened during fetching!', err));
  }

  render() {
    const { images } = this.state;
    console.log(images);

    return (
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
        <SearchImages onSearch={this.getImages} />
        <ImagesList data={images} />
      </div>
    );
  }
}
