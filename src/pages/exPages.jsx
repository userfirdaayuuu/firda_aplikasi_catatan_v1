import React from 'react';
import '../style/App.css';
import Registration from './RegisterPages';


function Pages() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default Pages;