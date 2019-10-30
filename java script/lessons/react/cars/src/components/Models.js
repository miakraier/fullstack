import React, { Component } from 'react';
import loading from '../Spinner.gif'
export class Models extends Component {
    state={
        title:"",
        models:[]
    }
async componentDidMount(){
let data= await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${this.props.match.params.id}?format=json`)
data= await data.json()
console.log(data.Results);
this.setState({models: data.Results, title:data.Results[0].Make_Name})

}
    render(){
        if(this.state.models.length==0){
        return(
            <img src={loading} atl="loading..."/>
    )}else{
        return(   <div>
            <h2>Models Of {this.state.title}</h2>
        <div className="carsMake">
           {this.state.models.map(model => (
      <h3 key={model.Model_ID} className="itemMake">{model.Model_Name}</h3>
      )
    )}
        </div>
        </div>)
    }
}
}

export default Models;

