
import { useState } from 'react';
import './App.css';
import Myform from './Myform.js';
import MyTable from './MyTable.js';



function App() {
  const [persons, setPersons]=useState([])

const onAdd=(e)=>{
setPersons(e)
console.log(persons)
}

  return (
    <div className="App">
       <h1>To do List</h1>      
       <Myform onSave={onAdd}/>
       <MyTable p={persons}/>  
    </div>
  );
}

export default App;
