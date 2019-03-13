import React from 'react'
import LikesCounter from "./LikesCounter"

const Advert = ({adverts, advertsToShow, handleAdvertToUpdate, onAdDelete, admins}) => {
  console.log(admins)
   
  const getAdminById = (admins, id) => {
    console.log(admins)
    console.log(id)

        const foundAdmin = admins.find(admin => {
            console.log(admin.id)
            return admin.id === Number(id)
        })
        console.log(foundAdmin)
        if (foundAdmin) {
            return foundAdmin.userName
        } else {
            return null;
        }
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
            <p>{advert.adminRender ? getAdminById(admins, advert.adminRender) : ""}</p>
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