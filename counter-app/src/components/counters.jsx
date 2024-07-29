import React, { Component } from 'react';
import Counter from './counter';
//import { block } from 'sharp';
class Counters extends Component {
    
    state = { 
        counters:[
            {id:1 , value :0},
            {id:2 , value :0},
            {id:3 , value :0},
            {id:4 , value :0},

        ]
     } 
     handleDelete=(id)=>{
        alert("event handleDelete called "+ id )
        const counters = this.state.counters.filter(c=>c.id !=id);
        console.log(counters)
        this.setState({counters:counters});

     }
    render() { 
        
        
        return (
            <React.Fragment >
               {this.state.counters.map(counter => <Counter key={counter.id} id={counter.id} onDelete={this.handleDelete} value = {counter.value} />)}
            </React.Fragment>
        );
    }
}
 
export default Counters;