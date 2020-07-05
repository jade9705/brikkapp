import React from 'react';

function EstateListItem({image, name}){
    return(
    <div className="estate" >
          <div className="estate__thumbnail">
            <img src={image} alt="Outside of the property" />
          </div>
          <div className="estate__name">
            {name}
          </div>
        </div>
    )
}

export default EstateListItem