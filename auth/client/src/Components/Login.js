import React, { useState } from 'react' ;
import axios from 'axios'
import { Link , useHistory } from 'react-router-dom';
function Login(){

const [password , setpassword]=useState("")
const [email , setemail]=useState("")
const [message,setmessage]= useState("")
const history = useHistory(); 


function submit(){
    const obj={email : email ,password : password}
axios.post('http://localhost:3009/api/login',obj).then((res)=>{
    if(res.data.token){
        localStorage.setItem('token',res.data.token)
        history.push('/book') 
    }
    else {
     setmessage('invalid credentials please try again')
    }
   
})
.catch(err=>{
    console.log(err)
})
}
return (<div>
        <label>
            Email:
            <input type="text"  onChange={(e)=>setemail(e.target.value)}/>
            Password:
            <input type="password"  onChange={(e)=>setpassword(e.target.value)}/>
        </label>
        <button onClick={submit}>SUBMIT</button>
        <p>{message}</p> 
        <h1>Need An account ? <Link to='/register'>Register</Link></h1>
</div>)
}
export default Login ;




