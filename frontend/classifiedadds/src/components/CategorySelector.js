import React from 'react';

<<<<<<< HEAD

const CategorySelector = ({adverts, onCategorySelected}) => {
    const options = adverts.map((advert, index)=> {
        return <option value={advert.category} key={index}>{advert.category}</option>
=======
const CategorySelector = ({ adverts, onCategorySelected }) => {

    const newArrayOfValues = [];

    adverts.map((advert) => {
        return newArrayOfValues.push(advert.category)
>>>>>>> dev
    })

    let unique = [...new Set(newArrayOfValues)];

    const options = unique.map((advert, index) => {
        return <option value={advert} key={index}>{advert}</option>
    })

    function handleChange(event) {
        onCategorySelected(event.target.value)
    }

    return (
        <form>
            <select id="category-selector" onChange={handleChange} defaultValue="default">
                <option value="default">Category filter / View all</option>
                {options}
            </select>
        </form>
    )
}




export default CategorySelector;
