import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { BookClubHome } from "./components/BookClubHome";
import { Login } from "./components/LoginForm/LoginForm";
import { NewUserForm } from "./components/NewUser/NewUserForm";
import { User } from "./models/User";
import { MemberList } from "./components/MemberList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<BookClubHome />} />
        <Route path="/users/:id" element={<MemberList />} />
        <Route
          path="/create-profile"
          element={
            <NewUserForm
              onAdd={function (newUser: User): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        {/* <Route path="/past-reads" element={<PastReads />} /> */}
      </Routes>
    </div>
  );
}

export default App;
