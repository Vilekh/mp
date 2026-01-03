import './Header.css';
import { useEffect, useState } from 'react';
import Auth from '../AuthComponent/Auth';

function Header() {

  const [ HeaderContent , setHeaderContent ] = useState();

  useEffect(()=>{
    setInterval(()=>{
    if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
    {
      setHeaderContent(<>
      
      <div id="tooplate_header_wrapper">
	<div id="tooplate_header">
    
    	<div id="site_title">
            <h1><a href="" rel="nofollow">eAuction<br/><br/><span>Buy & Sell Anything...</span></a></h1>
        </div> {/* end of site_title */}
        
        <div id="header_right">
          <h3 style={{'color':'white'}} >Welcome Admin : {localStorage.getItem("email")}</h3>        
        </div>
    
    </div>
</div>
      
      </>);      
    }
    else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
    {
      setHeaderContent(<><div id="tooplate_header_wrapper">
        <div id="tooplate_header">
          
            <div id="site_title">
                  <h1><a href="" rel="nofollow">eAuction<br/><br/><span>Buy & Sell Anything...</span></a></h1>
              </div> {/* end of site_title */}
              
              <div id="header_right">
                <h3 style={{'color':'white'}} >Welcome User : {localStorage.getItem("email")}</h3>        
              </div>
          
          </div>
      </div>
            
            </>);      
    }      
    else
    {
      setHeaderContent(<>
        <div id="tooplate_header_wrapper">
	<div id="tooplate_header">
    
    	<div id="site_title">
            <h1><a href="" rel="nofollow">eAuction<br/><br/><span>Buy & Sell Anything...</span></a></h1>
        </div> {/* end of site_title */}
        
        <div id="header_right">
        
        	<div id="social_box">
                <ul>
                    <li><a href="#"><img src="assets/images/facebook.png" alt="facebook" /></a></li>
                    <li><a href="#"><img src="assets/images/twitter.png" alt="twitter" /></a></li>
                    <li><a href="#"><img src="assets/images/linkedin.png" alt="linkin" /></a></li>
                </ul>
                <div class="cleaner"></div>
			</div>   
			         
             <div id="search_box">
                <form action="#" method="get">
                    <input type="text" value="Search" name="q" size="10" id="searchfield" title="searchfield" onfocus="clearText(this)" onblur="clearText(this)" />
                  <input type="submit" name="Search" value="" id="searchbutton" title="Search" />
                </form>
            </div>
            	
        </div>
    
    </div>
</div>
      </>);
    }
    },1);
  },[]);

  return (
<>    
<Auth />
{ HeaderContent }
</>
  );
}

export default Header;




