import React from 'react';
import Card from 'card';
import List from 'list';
import STORE from 'store'

function App(STORE) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {/* For earch item in the list, render a List component */}
        
      </div>
      <Card />
    </main>
  );
}

export default App;
