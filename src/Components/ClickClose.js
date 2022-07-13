import React, { useState} from "react";
import _ from "lodash";

function ClickClose(){
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen((openTab) => !openTab)
  }


  return(
    <div className="click-btn">
      
      <button onClick={handleClick}>Click Me</button>
      {open && (showContent)}
    </div>
  )
}

export default ClickClose;