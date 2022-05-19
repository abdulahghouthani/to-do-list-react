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
    
    //create row for each person
    const ul = document.createElement('ul');
    ul.className="tbl1";

    // column
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
    btn.className="btndel";

    ul.append(li, li2, li3, btn);
    
    btn.onclick = function(event) {
        li.style.display="none";
        li2.style.display="none";
        li3.style.display="none";
        btn.style.display="none";
        ul.style.display="none";
      }

    document.querySelector('#DataRowt').append(ul);
    document.getElementById('name').value="";
    document.getElementById('age').value="";
    document.getElementById('sex').value="";
    

}
  


export default Myform