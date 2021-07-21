
import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';

class App extends Component {
  state={
    news1:{
      type:'top-headlines',
      query: 'sources=techcrunch'
    },
    news2:{
      type: 'everything',
      query: 'q=apple&from=2021-07-18&to=2021-07-18&sortBy=popularity'
    },
    news3:{
      type: 'everything',
      query: 'domains=comicbookmovie.com&language=en'
    }
      }
  render() {
    return (
      <div className="containwer-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo lighten-4">
            <a href="/" className="bran-logo center">My Feed</a>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col s8">
          <News news={this.state.news1} />
          <News news={this.state.news2} />
        </div>
        <div className="col s4">
          <Sidenews  news={this.state.news3}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
