import React, {Component} from 'react';

const CategorySelector = ({adverts}) => {
    const options = adverts.map((advert, index)=> {
        return <option value={index} key={index}>{advert.category}</option>
    })

    function handleChange(event){
        adverts.onCategorySelected(event.target.value)
    }

    return(
        <select id="category-selector" onChange={handleChange} defaultValue = "default">
        <option disabled value="default">Filter By Category</option>
        {options}
        </select>
    )
}




export default CategorySelector;