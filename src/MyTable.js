import { useEffect, useState } from 'react';
import './App.css';
function MyTable(props) {
   const [x, setX] = useState([])

   useEffect(() => {
      setX([...x, props.p])
      console.log(x)
   }, [props.p])

   const removeSecond = (id) => {
      setX((current) =>
         current.filter((x) => x.id !== id)
      );
   };
   return (
      <div class="table-wrapper">
         <table class="fl-table">
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Options</th>
               </tr>
            </thead>
            {x.map(y =>
            (
               y.id>0&&
            (   <tr>
                  <td>{y.id}</td>
                  <td>{y.name}</td>
                  <td>{y.age}</td>
                  <td>{y.sex}</td>
                  <td><button onClick={()=>removeSecond(y.id)}>Delete</button></td>
               </tr>)
            )

            )}

         </table>
      </div>
   )
}

export default MyTable