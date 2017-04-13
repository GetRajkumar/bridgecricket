import React, { Component } from 'react';
import PageHeader from './components/header';
import MatchList from './components/match_list';
class App extends Component {
  render() {
    return (
      <div>
      <PageHeader/>
      <MatchList/>
      </div>
    )
  }
}

export default App;
