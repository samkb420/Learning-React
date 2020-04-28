import React from 'react';
import TodoItem from './TodoItem'
import ContactCard from './ContactCard'
import Header from './Header'
import TimeNow from './TimeNow'



function App() {
  return (
    <div className="container mt-2">
      <Header />
      <div className="row">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      </div>
      <div className="row">
      <TodoItem />
      <TimeNow />
      <TodoItem />
      </div>

      <div className="row">
      <ContactCard name="samuel kago" phone="0792986331" likes="20" email ="kagosamuel07@yahoo.com"/>
      <ContactCard name="john Doe" phone="0792986331" likes="50" email ="johndoe90@yahoo.com" />

      </div>
      
    </div>
  );
}

export default App;

