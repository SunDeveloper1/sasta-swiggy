import React from 'react';

class AboutClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count:0
        }
        console.log("Inside the Class constructor 👷🏽‍♂️")
    }

    async componentDidMount(){
        
        let data=await fetch('https://api.github.com/users/SunDeveloper1')
        let result=await data.json();
        console.log(result)
    }

    render(){
        console.log("Inside the render method 🔃")
        return(
            <>
            <h1>About Class Component</h1>
            <h3>Props is used as {"{this.props.name}"}</h3>
            <h4>Name :- {this.props.name}</h4>
            <h3>State is Defined in constructor inside this.state object and upated using setState function</h3>
            <h2>Count :-{this.state.count}</h2>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>Click Me</button>
            </>
        )
    }
}


export default AboutClass