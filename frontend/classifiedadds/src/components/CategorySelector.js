import React from 'react';

const CategorySelector = ({ adverts, onCategorySelected }) => {

    const newArrayOfValues = [];

    adverts.map((advert) => {
        return newArrayOfValues.push(advert.category)
    })

    let unique = [...new Set(newArrayOfValues)];

    const options = unique.map((advert, index) => {
        return <option value={advert} key={index}>{advert}</option>
    })

    function handleChange(event) {
        onCategorySelected(event.target.value)
    }

    return (
        <form className="form-selector">
            <select id="category-selector" onChange={handleChange} defaultValue="default">
                <option value="default">Category filter / View all</option>
                {options}
            </select>
        </form>
    )
}




export default CategorySelector;