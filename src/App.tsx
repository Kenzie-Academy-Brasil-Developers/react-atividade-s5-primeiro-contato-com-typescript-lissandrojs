import React, { useState } from 'react';

import './App.css';
import Card from './components/Card';
import Input from './components/Input/'

const App=()=> {
  interface Person {
    name:string
    age:number
    hobby:string
  }

    const [name,setName] = useState("")
    const [age,setAge] = useState(0)
    const [hobby, setHobby] = useState("")
    const [users,setUsers] = useState<Person[]>([])

    const handleSubmitUsers = (name:string,hobby:string,age:number)=>{
       const person = {name,age,hobby}
       setUsers([...users,person])
    }

  return (
    <div className="App">
      <header className="App-header">
       
     <Input onChange={(e)=> setName(e.target.value)} placeholder="Nome"/>
     <Input onChange={(e)=> setHobby(e.target.value)} placeholder='Hobby' label='foi'/>
     <Input onChange={(e)=> setAge(Number(e.target.value))} placeholder='Idade' label='foi'/>
    <button onClick={()=> handleSubmitUsers(name,hobby,age)}>Enviar</button>

    <ul>
      {users.map((user)=>(
        <li> 
          <Card key={user.name} name={user.name} age={user.age} hobby={user.hobby}></Card>
        </li>
      ))}
    </ul>
      </header>
    </div>
  );
}

export default App;
