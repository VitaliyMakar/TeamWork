import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";

const Users = () => {
    const {users, setActiveUser} = useContext(GlobalContext)

    return (
        <div>
            {
                users.map((user) => {
                    return (
                        <div
                            key={user.id}
                            onClick={() =>{setActiveUser(user)}}
                        >
                            {user.name}
                        </div>
                    )


                })
            }
        </div>
    )
}

export default Users;