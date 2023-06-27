import { useEffect, useState } from "react";
import { User } from "../models/User";
import { getUsers } from "../services/ExpressService";
import { Link } from "react-router-dom";
import { Header } from "./Header/Header";
export function MemberList() {
<<<<<<< HEAD
  const [users, setUsers] = useState<any>([]);
=======
  const [users, setUsers] = useState<User[]>([]);

>>>>>>> 83e2f8471f5c4864602fc029fb8578391e7e3c0a
  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);
  return (
    <div id="member-list">
      <Header />
      <h3>Members</h3>
      {users.map((user: User) => (
        <ul>
          <li key={user._id}>
            <Link to={`/users/${user._id}`}>
              Name: {user.firstname} {user.lastname}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}