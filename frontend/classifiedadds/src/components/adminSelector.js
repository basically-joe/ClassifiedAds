import React from 'react';

const AdminSelector = ({ admins, onAdminSelected}) => {

    const newArrayOfValues = [];

    admins.map((admin) => {
        return newArrayOfValues.push(admin.userName)
    })

    let unique = [...new Set(newArrayOfValues)];

    const options = unique.map((admin, index) => {
        return <option value={admin} key={index}>{admin}</option>
    })

    function handleChange(event) {
        onCategorySelected(event.target.value)
    }

    return (
        <form>
            <select id="category-selector" onChange={handleChange} defaultValue="default">
                <option value="default">View All Admins</option>
                {options}
            </select>
        </form>
    )
}
