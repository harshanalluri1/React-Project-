import React,{useState} from 'react';

const EmailValidation = () => {
    let [email, updatedEmail] = useState('')
    let [error, setError] = useState('')

    const updateEmail = (e)=>{
        let value = e.target.value
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
        // const isValid = emailRegex.test(value)  
        // console.log(isValid)
        console.log("value:" + value)
        if(value== ""){
            setError("Please enter the value")
        } else if(!emailRegex.test(value)){
            setError ("Please enter the valid email-id")
        } else{
            setError("ok");
            updatedEmail( e.target.value)
        }
        

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission or validation logic here
    };

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input onChange={updateEmail} name='email' type ='email' id='email'  /> 
                {/* You might want to add a submit button */}
                <button type="submit">Submit</button><span style={{color:"red"}}>{error}</span>
            </form>
            <p>{email}</p>
        </div>
    );
}
 
export default EmailValidation;
