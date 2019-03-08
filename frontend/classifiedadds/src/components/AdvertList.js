import React from 'react'
import LikesCounter from "../components/LikesCounter"

const AdvertList = ({adverts}) => {
    if (!adverts) return null;
    const advertNodes = adverts.map(advert => {
        return (
            <div key = {advert.category}>
            <LikesCounter/>
            <h1>{advert.title}</h1>
            <p>{advert.category}</p>
            <p>{advert.askingPrice}</p>
            <p>{advert.description}</p>
            </div>
        )
    })

    return(
        <div className="advert-list">
            {advertNodes}
        </div>
    )

}
export default AdvertList;