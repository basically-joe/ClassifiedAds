import React from 'react'

const AdminSelector = ({admins}) => {

const options = admins.map((admin, index) => {
    return<option value={index} key = {index}>{admin.userName}</option>
})

function handleChange(e){
    admins.onAdminSelected(e.target.value)
}

return(
    <select id="admin-selector" onChange={handleChange} defaultValue="default">
    <option disabled value ="default">Choose your username...</option>
    {options}
    </select>
)

}
 

export default AdminSelector;