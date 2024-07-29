import React, { Component } from 'react';
import "./counter.css"
class Counter extends Component {
    state = {  
        Count:this.props.value,
        imageUrl: "https://picsum.photos/200",
        tags: ["tag1","tag2","tag3"] 
    } 
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }  //The bind event is essential to bind the events that cannot access the this property because of strict logic
    render() { 
                return (
                    <React.Fragment >
                        <div className='counter-container'>
                            <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
                            <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button> 
                            <button onClick={()=> this.handleDecrement(this.props.id)} className='btn btn-danger btn-sm m-2'>{this.state.Count == 1?"remove-from-cart":"Decrement"}</button>
                        </div>
                    </React.Fragment>
                );  
             }
    handleIncrement=()=>{
        //console.log("increment Clicked")
        //alert("increment Clicked")
        if(this.state.Count < 5){
            this.setState({Count: this.state.Count +1})
            }
        else {
            alert("You cannot order more than 5 items")
        }
    }
    handleDecrement=(dis)=>{
       if(this.state.Count > 1){
        this.setState({
            Count: this.state.Count - 1
        })
        }
        else if(this.state.Count == 1){
        //this.setState({Count: this.state.Count - 1 })
       console.log(`${dis}`)
         this.props.onDelete(dis)
        
        }
    }
    // renderTags(){
    //     if(this.state.tags.length == 0) return <p>There are no tags!</p>
    //     return <ul>{this.state.tags.map(tag => <li id={tag}>{tag}</li>)}</ul>
    // }
    getBadgeClasses() {
        let classes = " badge m-4 badge-";
        classes += (this.state.Count === 0) ? "warning" : "primary";
        return classes;
    }
    formateCount() {
        const {Count} = this.state
        return Count == 0 ? "Zero":Count;
    }
}
export default Counter;