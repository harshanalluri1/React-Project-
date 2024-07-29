import React,{useState} from 'react';

const Counter = () => {
    const [inputField, setInputField] = useState({name:"",email:"",city:"",state:"",contry:""})
   const updateFields=(e)=>{
        e.preventDefault();
       // alert("success")
       setInputField({
        [e.target.name]: e.target.value
   })
    
   }
const SubmitForm =()=>{
       alert("success")
}


    return ( 
        <>
        <form>
            
            Name :<input onChange={updateFields} type='text' name='name'id='name' required ></input>
            Email :<input onChange={updateFields} type='text' name='email'id='email' ></input>
            City:<input onChange={updateFields} type='text' name='city'id='city'  ></input>
            State : <input onChange={updateFields} type='text' name='state'id='state'  ></input>
            Contry:<input  onChange={updateFields} type='text' name='contry'id='contry'  ></input>
            <button onClick={SubmitForm}>Submit</button>
        </form>
        <div>
            <h1>Display</h1>
            <p>{inputField.name}</p>
            <p>{inputField.email}</p>
            <p>{inputField.city}</p>
            <p>{inputField.state}</p>
            <p>{inputField.contry}</p>

        </div>
        </>
     );
}
 
export default Counter;