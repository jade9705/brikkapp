import React from 'react'; 
import EstateComparisonItem from './EstateComparisonItem.jsx';
import './estate-comparison.scss';

function EstateComparison({estateProps}){


    
    let content = null;
     
    if(estateProps){   
        const cheaperPrice=estateProps[4].prize_czk < estateProps[6].prize_czk;
        const moreBuildingSpace=estateProps[4].building_area > estateProps[6].building_area;
        const moreLandSpace=estateProps[4].land_area > estateProps[6].land_area;


  
        content=(
            <>
             <EstateComparisonItem image={estateProps[4].images[0]} 
                                  name={estateProps[4].name} 
                                  label={estateProps[4].label}
                                  price={estateProps[4].prize_czk}
                                  cheaperPrice={cheaperPrice}
                                  
                                  locality={estateProps[4].locality}
                                  floorArea={estateProps[4].building_area}
                                  moreBuildingSpace={moreBuildingSpace}
                                  
                                  landArea={estateProps[4].land_area}
                                  moreLandSpace={moreLandSpace}

                                  companyLogo={estateProps[4].company_logo}
                                  companyName={estateProps[4].company_name} />

            <EstateComparisonItem image={estateProps[6].images[0]} 
                                  name={estateProps[6].name} 
                                  label={estateProps[6].label}
                                  price={estateProps[6].prize_czk}
                                  cheaperPrice={!cheaperPrice}
                                  locality={estateProps[6].locality}
                                  floorArea={estateProps[6].building_area}
                                  moreBuildingSpace={!moreBuildingSpace}
                                  landArea={estateProps[6].land_area}
                                  moreLandSpace={!moreLandSpace}
                                  companyLogo={estateProps[6].company_logo}
                                  companyName={estateProps[6].company_name} />    
            </>
        )
    } else {
        content = null
    }
    
    return(
        <div className="estate-compare">
          {content}
        </div>
    )
    }

export default EstateComparison