import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  
import { __userapiurl } from '../../API_URL';

function Login() {

  const navigate = useNavigate();
  const [ output , setOutput ] = useState();  
  const [ email , setEmail ] = useState();  
  const [ password , setPassword ] = useState();
  
  const handleSubmit=(e)=>{
   const userDetails={"email":email,"password":password}; 
   console.log(userDetails);
   axios.post(__userapiurl+"login",userDetails).then((response)=>{
    const users=response.data.users;
    localStorage.setItem("token",response.data.token);
    localStorage.setItem("name",users.name);
    localStorage.setItem("email",users.email);
    localStorage.setItem("mobile",users.mobile);
    localStorage.setItem("address",users.address);
    localStorage.setItem("city",users.city);
    localStorage.setItem("gender",users.gender);
    localStorage.setItem("role",users.role);
    localStorage.setItem("info",users.info);
    users.role=="admin"?navigate("/admin"):navigate("/user");   
   }).catch(()=>{
    setOutput("Invalid user or please verify your account....");
    setEmail("");
    setPassword("");
   }); 
  };  

  return (
<>   

<div id="tooplate_content">
<div class="content_box content_box_last">

<h2>Login Here!!!</h2>
<font color="blue" >{ output }</font>
  <form>
  <label>Email:</label>
  <input type="email" onChange={e=>setEmail(e.target.value)} value={email} />
  <br/><br/>
  <label>Password:</label>
  <input type="password" onChange={e=>setPassword(e.target.value)} value={password} />
  <br/><br/>
  <button type="button" onClick={handleSubmit} >Submit</button>
</form>

</div>
</div>

</>
  );
}

export default Login;




