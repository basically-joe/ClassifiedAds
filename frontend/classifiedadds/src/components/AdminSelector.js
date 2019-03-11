import React from 'react'

const AdminSelector = ({admins, onAdminSelected}) => {

const options = admins.map((admin, index) => {
    return<option value={index} key = {index}>{admin.userName}</option>
})

function handleChange(event){
    onAdminSelected(event.target.value)
}


return(
    <select id="admin-selector" onChange={handleChange} defaultValue="default">
    <option disabled value ="default">Choose your username...</option>
    {options}
    </select>
)

}
 

export default AdminSelector;