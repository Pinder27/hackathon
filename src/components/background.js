import React from "react";

import bgImage from "../assests/images/pexels-ann-h-6266316.jpg"



  function Background()  {
  const divStyle = {
    backgroundImage: `url(${bgImage})`, // Adjust the path to your image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
   
     // Optional, for a fixed background
  };
   return(
    <div className="p-5" height="100%" style={divStyle}>
           something
    </div>
   )
  
}

export default Background;
