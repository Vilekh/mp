import './Banner.css';
import { useEffect, useState } from 'react';

function Banner() {

  const [BannerContent , setBannerContent ] = useState();

  useEffect(()=>{
    setInterval(()=>{
    if(localStorage.getItem("token")!=undefined)
    {
      setBannerContent(<></>);      
    }
    else
    {
      setBannerContent(<>
      <div id="tooplate_middle_wrapper">
	<div id="tooplate_middle">
    
    	<img src="assets/images/banner.jpeg" height="180" width="320" alt="Image 01" />
        
        <div id="middle_content">
        	<h2>Online Portal To Buy & Sell Product....</h2>
            <p>Nullam in justo lacus, id viverra elit. Ut dignissim auctor purus, id vestibulum turpis rutrum eget. Maecenas ut ipsum pellentesque purus ullamcorper fringilla. Nunc in turpis non nisi egestas convallis in at massa.</p>
        </div>
    
    </div>
</div>
      </>);
    }
    },1);
  },[]);

  return (
<>    
{ BannerContent }
</>
  );
}

export default Banner;




