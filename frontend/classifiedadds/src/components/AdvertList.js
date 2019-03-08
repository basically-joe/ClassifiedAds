import React from 'react'
import Advert from "../components/Advert"

const AdvertList = ({adverts}) => {
    if (!adverts) return null;
    const advertNodes = adverts.map(advert => {
        return (
            <div>
            <h1 key = {advert.category}>{advert.title}</h1>
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