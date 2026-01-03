import './CPAdmin.css';
import { useState } from 'react';
import { __userapiurl } from '../../API_URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CPAdmin() {

  const navigate = useNavigate();
  const [ output , setOutput ] = useState();  
  const [ email , setEmail ] = useState(localStorage.getItem("email"));
  const [ opassword , setOldPassword ] = useState();
  const [ npassword , setNewPassword ] = useState();
  const [ cnpassword , setConfirmNewPassword ] = useState();

  const handleSubmit=()=>{
    axios.get(__userapiurl+"fetch",{
      params : {"email":email,"password":opassword}
    }).then((result)=>{
      if(npassword==cnpassword)
      {
        axios.patch(__userapiurl+"update",
          {"condition_obj":{"email":email},"content_obj":{"password":cnpassword}}
        ).then(()=>{
          alert("Password Updated Success...");  
          navigate("/logout");      
        });
      } 
      else
      {
        setOutput("New & Confirm New Password Mismatch....");    
        setNewPassword("");
        setConfirmNewPassword("");
      }  
    }).catch((error)=>{
      setOutput("Invalid old password....");
      setOldPassword("");
    });      
  };

  return (
<>   
<div id="tooplate_content">
<div class="content_box content_box_last">
<h2> Change Password Here!!!</h2>
<font color="blue" >{ output }</font>
  <form>
  <label>Old Password:</label>
  <input type="password" onChange={e=>setOldPassword(e.target.value)} value={opassword} />
  <br/><br/>
  <label>New Password:</label>
  <input type="password" onChange={e=>setNewPassword(e.target.value)} value={npassword} />
  <br/><br/>
  <label>Confirm New Password:</label>
  <input type="password" onChange={e=>setConfirmNewPassword(e.target.value)} value={cnpassword} />
  <br/><br/>
  <button type="button" onClick={handleSubmit} >Submit</button>
</form>
</div>
</div>
</>
  );
}

export default CPAdmin;




