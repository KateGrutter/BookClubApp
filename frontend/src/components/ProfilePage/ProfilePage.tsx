import { useEffect, useState } from "react"
import { User } from "../../models/User"
import { getUsers } from "../../services/ExpressService"

export function ProfilePage() {

const [users, setUsers] = useState<any>([])

useEffect(() => {
getUsers().then(data => setUsers(data))
}, [])

return (
    <div id="profile-page">
        {
            users.map((user: User) => <div>
                <p>Name: {user.firstName} {user.lastName}</p>
                <p>Member since: {user.memberSince}</p>
                <p>Username: {user.userName}</p>
                </div>)
        }
    </div>
)
}