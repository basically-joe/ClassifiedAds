import React from 'react';


const FilteredList = ({filteredAdverts}) => {

    console.log(filteredAdverts)
    if (!filteredAdverts) return null;

    const filteredNodes = filteredAdverts.map(advert => {
        return (
            <div key = {advert.category} className = "individual-category-box">
            <h1>{advert.category}</h1>
            <h3>{advert.title}</h3>
            </div>
         )
        
        })
        
        return (
         
            <div>{filteredNodes} </div>
        )




    }










export default FilteredList;