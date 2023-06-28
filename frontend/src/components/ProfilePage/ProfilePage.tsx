import { useEffect, useState } from "react";
import { User } from "../../models/User";
import { getUserById } from "../../services/ExpressService";
import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
// import { User } from "../../../../backend/functions/src/models/User"

export function ProfilePage() {
  const id = useParams().id;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUserById(id!).then((data) => setUser(data));
  }, [id]);

  return (
    <div id="member-list">
      <Header />
      {user ? (
        <div>
          <h1>
            {user.firstname} {user.lastname}
          </h1>
          <h3>Username: {user.username}</h3>
          <h3>Member since: {user.membersince}</h3>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
