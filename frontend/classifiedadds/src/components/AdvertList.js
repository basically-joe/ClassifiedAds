import React from 'react'

const AdvertList = ({adverts}) => {

    if (!adverts) return null;
    console.log(adverts)

    const advertNodes = adverts.map(advert => {
        return (
            <div key = {advert.category} className = "individual-ad-box-column">
            <h1>{advert.title}</h1>
            <p>{advert.category}</p>
            <p>{advert.askingPrice}</p>
            <p>{advert.description}</p>
            </div>
        )
    })

    return(
        <section className="advert-list-row">
            {advertNodes}
        </section>
    )

}
export default AdvertList;