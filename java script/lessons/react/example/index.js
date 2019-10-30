class MyComponent extends React.Component{
    state={
        counter:0
    }
    handleClick= () =>{
console.log('i was clicked')
this.setState({
    counter: this.state.counter+1
})
}
    render(){
        return(
            <div className="mycomponent">
            <h1>i can write html here</h1>
           <button onClick={this.handleClick}>{this.state.counter}</button>
           <Baby cycle="4"/>
           <Baby cycle="15"/>
           <Baby cycle="70"/>
           </div>
        )
    }
}

class Baby extends React.Component{
    render(){
        return(
            <div className="baby">
                <h1>another html</h1>
                <h4>from cycle no. {this.props.cycle}</h4>
            </div>
        )
    }
}

ReactDOM.render(
<MyComponent/>,document.getElementById('root'))