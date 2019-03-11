import React from 'react';

const CategorySelector = (props) => {
  const options = props.category.map((category, index) => {
    return <option value={index} key={index}>{category.name}</option>
  })

  function handleChange(event) {
    props.onCategorySelected(event.target.value);
  }

  return (
    <select id="category-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a category...</option>
      { options }
    </select>
  )
}

export default CategorySelector;
