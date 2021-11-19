import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
function App() {
  let data = {title: "Loading the title"};
  const [todo, setTodo] = useState(data);
  
  const [load, setLoad] = useState(true);

  useEffect(()=>
  {
    async function fetchData()
    {
      // setLoad(true);
      let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      let data2 = await response.json();
      // console.log(data2);
      setTodo(data2);
      setLoad(false);
      
    }

    fetchData();
  },[load])

  console.log(load)
  if(load)
  {
    
    return <h1>Loading the content....</h1>
  }
  //useEffect is called after the component is done being rendered
  return (
    <div className="App">
        <h1>Title: {todo.title}</h1>

    </div>
  );
}

export default App;
