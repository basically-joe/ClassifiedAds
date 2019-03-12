import React from 'react'

const AdvertList = ({adverts}) => {

    if (!adverts) return null;
    console.log(adverts)

    const advertNodes = adverts.map(advert => {
        return (
            <div key = {advert.title} className = "individual-ad-box-column">
            <h3>{advert.title}</h3>
            <p>{advert.category}</p>
            <p>{advert.askingPrice}</p>
            <p>{advert.description}</p>
            </div>
        )
    })

    return(
        <div className="advert-list-row">
            {advertNodes}
        </div>
    )

}
export default AdvertList;
