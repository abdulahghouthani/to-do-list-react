import { useState } from 'react';
import './App.css';

function Myform(props) {
  const [count,setCount]=useState(2)
 const [person, setPerson]=useState({id:1,name:'',age:'',sex:''})

 const handelName=(e)=>{
  setPerson({...person,name:e.target.value})
  console.log(person)
 }

 const handelAge=(e)=>{
  setPerson({...person,age:e.target.value})
  console.log(person)
 }

 const handelSex=(e)=>{
  setPerson({...person,sex:e.target.value})
  console.log(person)
 }

 const handelAdd=()=>{
  setCount(count=>count+1)
  setPerson({...person,id:count})
  console.log(count)
  props.onSave(person)
 }
  
  return (
    <>
      <div className='Form'>
        <div className='Input-Form'>
          <input className='InputFeild' id="name" type="text" placeholder='Insert Name' onChange={handelName}/>
          <input className='InputFeild' id="age" type="number" placeholder='Insert Age' onChange={handelAge}/>
          <select className='InputFeild' id="sex" type="text" placeholder='Sex'onChange={handelSex}>
            <option >Male</option>
            <option>Female</option>
          </select>
         
        </div>

        <button className='btn' onClick={handelAdd}>Add</button>
      </div>

    </>
  );
}




export default Myform