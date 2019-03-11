import React from 'react'

    const AdminView = ({admin}) => {
        if (!admin) return null;
            console.log(admin)
        return(
            <div className="admin-list">
                <p>{admin.clientName}</p>
            </div>
        )
        }

    export default AdminView;