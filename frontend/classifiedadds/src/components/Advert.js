import React from 'react'

const Advert = ({adverts, handleAdvertToUpdate, onAdDelete}) => {

    const advertNodes = adverts.map((advert) => {
    
        return (
            <div key = {advert.title} className = "individual-ad-box-column">
            <h1>{advert.title}</h1>
            <p>{advert.category}</p>
            <p>{advert.askingPrice}</p>
            <p>{advert.description}</p>
            <p>{advert.admin ? advert.admin.userName : ""}</p>
            <button onClick = {()=> {handleAdvertToUpdate(advert)
                console.log("HI")
            }}>Update</button>
            <button onClick = {()=> {onAdDelete(advert.id)}}>Delete</button>
            </div> 
        )
    })

    return(
        <div className="advert-list-row">
            {advertNodes}
        </div>
    )

}
export default Advert;