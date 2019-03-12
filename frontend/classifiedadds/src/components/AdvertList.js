import React from 'react'
import AdminView from "./AdminView"

const AdvertList = ({adverts, onAdDelete}) => {


    if (!adverts) return null;

    const advertNodes = adverts.map(advert => {
    
        console.log(advert.id)
        
        return (
           
            <div key = {advert.title} className = "individual-ad-box-column">
     
            <h1>{advert.title}</h1>
            <p>{advert.category}</p>
            <p>{advert.askingPrice}</p>
            <p>{advert.description}</p>

            <button onClick = {()=> {onAdDelete(advert.id)}}>Delete</button>
            </div>
        )
    })

    return(
        <div className="advert-list-row">
            {advertNodes}
            {/* <AdminView admin = {admin}/> */}
        </div>
    )

}
export default AdvertList;