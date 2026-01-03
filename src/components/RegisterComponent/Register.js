import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';

function Register() {

const [ output , setOutput ] = useState();  
const [ name , setName ] = useState();
const [ email , setEmail ] = useState();  
const [ password , setPassword ] = useState();
const [ mobile , setMobile ] = useState();
const [ address , setAddress ] = useState();
const [ city , setCity ] = useState();
const [ gender , setGender ] = useState();

const handleSubmit=(e)=>{
 const userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender}; 
 axios.post(__userapiurl+"save",userDetails).then(()=>{
  setOutput("User register successfully....");
  setName("");
  setPassword("");
  setEmail("");
  setMobile("");
  setAddress("");
  setCity("");
 }).catch(()=>{
  setOutput("User registration failed....");
 }); 
};

return (
<>   

<div id="tooplate_content">
<div class="content_box content_box_last">
<h2>Register Here!!!</h2>
<font color="blue" >{ output }</font>
  <form>
      <label>Name:</label>
      <input type="text" onChange={e=>setName(e.target.value)} value={name} />
      <br/><br/>
      <label>Email:</label>
      <input type="email" onChange={e=>setEmail(e.target.value)} value={email} />
      <br/><br/>
      <label>Password:</label>
      <input type="password" onChange={e=>setPassword(e.target.value)} value={password} />
      <br/><br/>
      <label>Mobile:</label>
      <input type="text" onChange={e=>setMobile(e.target.value)} value={mobile} />
      <br/><br/>
      <label>Address:</label>
      <textarea onChange={e=>setAddress(e.target.value)} value={address}></textarea>
      <br/><br/>
      <label>City:</label>
      <select onChange={e=>setCity(e.target.value)} value={city}>
      <option>Select City</option>
      <option>Indore</option>
      <option>Bhopal</option>
      <option>Ujjain</option>  
      </select>
      <br/><br/>
      <label>Gender:</label>
      Male <input type="radio" onChange={e=>setGender(e.target.value)} value="male" />
      &nbsp;&nbsp;
      Female <input type="radio" onChange={e=>setGender(e.target.value)} value="female" />
      <br/><br/>
      <button type="button" onClick={handleSubmit} >Submit</button>
  </form>    
    
</div>
</div>

</>
  );
}

export default Register;




