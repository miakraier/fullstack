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
            <div>
            <h1>i can write html here</h1>
           <button onClick={this.handleClick}>{this.state.counter}</button>
           <Baby/>
           </div>
        )
    }
}

class Baby extends React.Component{
    render(){
        return(
            <div>
                <h1>another html</h1>
            </div>
        )
    }
}

ReactDOM.render(<MyComponent/>,document.getElementById('root'))