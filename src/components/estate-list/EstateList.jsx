import React from 'react'
import EstateListItem from './EstateListItem.jsx';
import './estate-list.scss'
 
const EstateList = ({estateProps}) => {   

    let content = null;
     
    if(estateProps){     
        content=(
            <>
                {estateProps.map((estateInfo, key) => {    
                    return( 
                    <EstateListItem image={estateInfo.images[0]} name={estateInfo.name} key={key} letter={key === 4 ? 'A' : key === 6 ? 'B' : null} />
                    )
                })}
            </>
        )
    } else {
        content = null
    }
    
    //if statement which maps through the data, assings it to the content variable

    return (

        <div className="estate-list-container">
            {content}
         </div>
    )
}

 export default EstateList