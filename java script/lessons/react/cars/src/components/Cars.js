import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import loading from '../Spinner.gif'

class Cars extends Component{
    state={
        makes:[]
    }
async componentDidMount(){
console.log ("cars did mount")
let data= await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json`)
data= await data.json()
console.log(data.Results);
this.setState({makes: data.Results})
}
    render(){
        if (this.state.makes.length==0){
        return(
            <img src={loading} atl="loading..."/>
    )
}else{
return(
    <div className="carsMake">
    {this.state.makes.map(make => (
        <Link to={"/models/"+ make.Make_ID} key={make.Make_ID}>
    <h3 className="itemMake">{make.Make_Name}</h3>    
    </Link>
    ))}
 </div>
)
}}
}

export default Cars;
