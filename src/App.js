import React from 'react';
import List from './List';

function App(props) {
  //Use the array 'lists' to make a List component for each
  const renderList = props.store.lists.map(function(item){
    return <List key={item.id} header={item.header} cardIds={item.cardIds} store={props.store}/>
  })
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {renderList}
      </div>
    </main>
  );
}

export default App;
