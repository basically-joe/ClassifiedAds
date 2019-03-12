import React from 'react'
import LikesCounter from "./LikesCounter"

const AdvertList = ({adverts}) => {

    if (!adverts) return null;
    console.log(adverts)


    const advertNodes = adverts.map(advert => {

        return (
           

            <div key = {advert.title} className = "individual-ad-box-column">
                <h1>{advert.title}</h1>
                <img src={ (advert.image)}></img>
                <p>{advert.category}</p>
                <p>{advert.askingPrice}</p>
                <p>{advert.description}</p>
                <LikesCounter/>

                <input
                    type= "submit"
                    value= "Delete"
                    onClick={removeAdvert}
                />
            </div>
            
        )
    })
    console.log(advertNodes)
    // console.log()

    function removeAdvert(e){
        // e.preventDefault();
        let advert = advertNodes.key;
       return advertNodes.splice(advert, 1);

    };
    

    return(
        <div className="advert-list-row">
            {advertNodes}
        </div>
    )

}
export default AdvertList;