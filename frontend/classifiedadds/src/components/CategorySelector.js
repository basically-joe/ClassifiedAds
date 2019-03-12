import React from 'react';

const CategorySelector = ({adverts, onCategorySelected}) => {
   


    const options = adverts.map((advert, index)=> {
        return <option value={advert.category} key={index}>{advert.category}</option>
    })


    function handleChange(event){
       console.log(event.target.value)
        onCategorySelected(event.target.value)
    }

    return(
        <select id="category-selector" onChange={handleChange} defaultValue = "default">
        <option value="default">Filter By Category / View All</option>
        {options}
        </select>
    )
}




export default CategorySelector;