import { useEffect, useState } from "react"
import { User } from "../../models/User"
import { getUserById } from "../../services/ExpressService"
import { Link, useParams } from "react-router-dom"

export function ProfilePage() {

const id = useParams().id;
const [user, setUser] = useState<User>()


useEffect(() => {
getUserById(id!).then(data => setUser(data))
}, [])

return (
    <div id="member-list">
        <h1>{user?.firstName} {user?.lastName}</h1>
        <h3>Username: {user?.userName}</h3>
        <h3>Member since: {user?.memberSince}</h3>
    </div>
)
}