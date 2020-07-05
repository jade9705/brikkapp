import React from 'react'; 

function EstateComparisonItem({image, name, price, locality, floorArea, landArea, companyLogo, companyName, cheaperPrice, moreBuildingSpace, moreLandSpace}){
  console.log(cheaperPrice )
    return (
        
        <div className="estate-container">
    
          <img className="estate-image" src={image} alt="img"/>
          <div className="estate-specs">
            <div className="estate-specs__label">
             {name}
            </div>
            <div className={`estate-specs__label ${cheaperPrice ? 'estate-specs--betterValue' : 'estate-specs--worseValue'}`} >
              <strong>Price</strong> <div className="estate-info">{price} Kc</div>
            </div>
            <div className="estate-specs__label">
              <strong>Locality</strong> <div className="estate-info">{locality}</div>
            </div>
            <div className={`estate-specs__label ${moreBuildingSpace ? 'estate-specs--betterValue' : 'estate-specs--worseValue'}`} >
              <strong>Floor area</strong> <div className="estate-info"> {floorArea} m²</div>
            </div>
            <div className={`estate-specs__label ${moreLandSpace ? 'estate-specs--betterValue' : 'estate-specs--worseValue'}`}>
              <strong>Land area</strong> <div className="estate-info">{landArea} m²</div>
            </div>
          </div>
          
          {companyLogo || companyName ?
    
          <div className="company">
            <img className="company__logo" src={companyLogo} alt="logo of company"/> 
            <div className="company__name">{companyName}</div>
          </div> : ''
          }

        </div>
    

    )
}

export default EstateComparisonItem