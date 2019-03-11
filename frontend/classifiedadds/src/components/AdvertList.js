import React from 'react'
import AdminView from "./AdminView"

const AdvertList = ({adverts, admin}) => {


    if (!adverts) return null;
    console.log(adverts)

    const advertNodes = adverts.map(advert => {
        // console.log(advert._links.self.href)
        // const deleteId = advert._links.self.href
        
        return (
           
            <div key = {advert.title} className = "individual-ad-box-column">
            {/* <button onClick = {onAdDelete(advert._links.self.href)}>Delete</button> */}
            <h1>{advert.title}</h1>
            <p>{advert.category}</p>
            <p>{advert.askingPrice}</p>
            <p>{advert.description}</p>
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