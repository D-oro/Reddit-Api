import './App.css';
import React from 'react';
import RedditContainer from './containers/RedditContainer';


function App() {
  return (
    <div className="App">
      <h2>Javascript Reddit</h2>
      <h3>All post titles:</h3>
      <RedditContainer/>
    </div>
  );
}

export default App;
