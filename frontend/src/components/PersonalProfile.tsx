import { useContext } from "react";
import AuthContext from "../AuthContext";

const {user} = useContext(AuthContext);

<p>UID: {user?.uid}</p>;
<p>Display name: {user?.displayName}</p>;
<p>Email: {user?.email}</p>;
