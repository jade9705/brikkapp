import React from 'react';

function EstateListItem({image, name, letter}){

    return (
       <div className="estate" >
          <div className="estate__thumbnail">
            <img src={image} alt="Outside of the property" />
           {letter ? 
              <div className="shadow">
                 <div class="circle">{letter}</div>
              </div> : '' } 
            </div>
          <div className="estate__name">
            {name}
          </div>
        </div>
    )
}

export default EstateListItem