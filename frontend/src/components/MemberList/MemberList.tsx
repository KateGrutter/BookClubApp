import { useEffect, useState } from "react";
import { User } from "../../models/User";
import { getUsers } from "../../services/ExpressService";
import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import "./MemberList.css";
export function MemberList() {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <Header />
      <div id="member-list">
        <h3>Members</h3>
        {users.map((user: User) => (
          <ul>
            <li key={user._id}>
              <Link to={`/users/${user._id}`}>
                {user.firstname} {user.lastname}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
