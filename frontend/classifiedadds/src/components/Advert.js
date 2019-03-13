import React from 'react'
import LikesCounter from "./LikesCounter"

const Advert = ({adverts, advertsToShow, handleAdvertToUpdate, onAdDelete, admins}) => {
  
    const getAdminById = (id) => {
        const foundAdmin = this.state.admins.find(admin => admin.id === Number(id))
        return foundAdmin.userName
    }


if(adverts.length > advertsToShow.length && advertsToShow.length === 0){
    const advertNodes = adverts.map((advert)  => {
    
        return (
            <div key = {advert.title} className = "individual-ad-box-column">
            <h1>{advert.title}</h1>
            <img alt="image_description" src={ (advert.image) }></img>
            <p>{advert.category}</p>
            <p>{advert.askingPrice}</p>
            <p>{advert.description}</p>
            <p>{advert.admin ? advert.admin.userName : ""}</p>
            <LikesCounter/>
            <button onClick = {()=> {handleAdvertToUpdate(advert) }}>Update</button>
            <button onClick = {()=> {onAdDelete(advert.id)}}>Delete</button>
            </div> 
        )
    })

    return(
        <div className="advert-list-row">
            {advertNodes}
        </div>
    )

} else {

    const filteredNodes = advertsToShow.map((advert) => {
    
        return (
            <div key = {advert.title} className = "individual-ad-box-column">
            <h1>{advert.title}</h1>
            <img alt="image_description" src={ (advert.image) }></img>
            <p>{advert.category}</p>
            <p>{advert.askingPrice}</p>
            <p>{advert.description}</p>
            <p>{advert.admin ? advert.admin.userName : ""}</p>
            <LikesCounter/>
            <button onClick = {()=> {handleAdvertToUpdate(advert)
                console.log("HI")
            }}>Update</button>
            <button onClick = {()=> {onAdDelete(advert.id)}}>Delete</button>
            </div> 
        )
    })

    

    return(
        <div className="advert-list-row">
            {filteredNodes}
        </div>
    )

}

}
export default Advert;