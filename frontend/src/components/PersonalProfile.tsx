import { useContext } from "react";
import AuthContext from "../AuthContext";

const {currentUser} = useContext(AuthContext);

<p>UID: {currentUser?.uid}</p>;
<p>Display name: {currentUser?.displayName}</p>;
<p>Email: {currentUser?.email}</p>;
