import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data);

  return <main>
    <section className="container">
      <h3 id="info">{people.length} people have birthdays today</h3>
      <List people={people}/>
      <button onClick={() => {
        setPeople([]);
        document.getElementById('info').remove();
      }}>Clear All</button>
      <button onClick={() => {
        setPeople(data);
      }}>
        Show All
      </button>
    </section>
  </main>
}

export default App;
