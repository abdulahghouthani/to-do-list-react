import './App.css';
let x=0;
function Myform(){
  return(
      <>
      
      <div className='InputForm'>
        <input className='InputFeild' id="name" type="text" placeholder='Name'/>
        <input className='InputFeild' id="age" type="text" placeholder='Age' />
        <input className='InputFeild' id="sex" type="text" placeholder='Sex' />
        <button className='btn' onClick={addPerson}>Submit</button>
    </div>
    
    </>
  );
}

function addPerson(){
    x=x+1;
    let name=document.getElementById('name').value;
    let age=document.getElementById('age').value;
    let sex=document.getElementById('sex').value;
    
    const li = document.createElement('li');
    li.innerHTML = name;
    li.className="lis";

    const li2 = document.createElement('li');
    li2.innerHTML = age;
    li2.className="lis";

    const li3 = document.createElement('li');
    li3.innerHTML = sex;
    li3.className="lis";
    
    const btn=document.createElement('button');
    btn.id=x;
    btn.innerHTML+="x";
    

    btn.onclick = function(event) {
        li.style.display="none";
        li2.style.display="none";
        li3.style.display="none";
        btn.style.display="none";
      }
    // Add new element to our unordered list:
    document.querySelector('#DataRowt').append(li);
    document.querySelector('#DataRowt').append(li2);
    document.querySelector('#DataRowt').append(li3);
    document.querySelector('#DataRowt').append(btn)

           //
           //let result="<tr class='Row' id='"+(x)+"'>";
           // result+="<td>"+name+"</td>";
          //  result+="<td>"+age+"</td>";
          //  result+="<td>"+sex+"</td>";
          //  result+="<td><button onClick="+{del(x)}+">x</button></td>";
          //  result+="</tr>"
       
        //document.getElementById("DataRowt").innerHTML+=result;

}
 
  function del(id){ 
    
     alert (id) ;
  } 


export default Myform