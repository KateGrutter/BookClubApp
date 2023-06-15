import { useState } from "react"
import { User } from "../../models/User"

export function NewUserForm (props: {onAdd: (newUser: User) => void}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [memberSince, setMemberSince] = useState('');

return(
    <form onSubmit={e => {e.preventDefault();
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        memberSince: memberSince,
        userName: userName,
    }
    
    props.onAdd(newUser);
    }}>
        <label>First Name: 
            <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text"/>
            <input value={lastName} onChange={e => setLastName(e.target.value)} type="text"/>
            <input value={memberSince} onChange={e => setMemberSince(e.target.value)} type="text"/>
            <input value={userName} onChange={e => setUserName(e.target.value)} type="text"/>
        </label>
    </form>
    )
}