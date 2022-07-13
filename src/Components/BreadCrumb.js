import React, { useState } from 'react';
import _ from 'lodash';

function BreadCrumb(props){
  const tabArray = props.tabs;
  const [selectedIndex, setSelectedIndex] = useState((tabArray.length)-1);

  const handleClick = (e, index) => {
    setSelectedIndex(index);
  }


  return(
    <div className="tab-row">
      {_.map(tabArray, (tab, index) => {
        return(
          (index <= selectedIndex) && (
            <div key={index} className="tab-btn" onClick={(e) => handleClick(e, index)}>
              {(index === selectedIndex) ? <h1>{tab}</h1> : <a>{tab}</a>}             
            </div>
          )
        )
      })}
    </div>
  )

}

export default BreadCrumb;
