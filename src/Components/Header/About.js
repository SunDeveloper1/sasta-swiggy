import React from 'react'
import {useState} from 'react'
function About(props) {

  let [count, setCount]=useState(0)
  {console.log("Inside the Functional Component 😏")}
  return (
    
    <>
    {console.log("Inside the Functional Return Component😵‍💫")}
   <h1> This is Functional Component</h1> 
   <h3>Props is used as {"{props.name}"}</h3>
   <h4>Name :- {props.name}</h4>
   <h3> State is set using useState Function</h3>
   <h2>Count :-{count}</h2>
   <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    </>
  )
}

export default About