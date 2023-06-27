import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { BookClubHome } from "./components/BookClubHome/BookClubHome";
import { Login } from "./components/LoginForm/LoginForm";
import { NewUserForm } from "./components/NewUser/NewUserForm";
import { User } from "./models/User";
import { MemberList } from "./components/MemberList";
import { PastReads } from "./components/PastReads";
import { BookDetails } from "./components/BookDetails";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route for the login page */}
        <Route path="/" element={<Login />} />

        {/* Route for the home page */}
        <Route path="/home" element={<BookClubHome />} />

        {/* Route for bookclubhome page */}
        <Route path="/feed" element={<BookClubHome />} />

        {/* Route for member list */}
        <Route path="/users" element={<MemberList />} />

        {/* Route for profile page */}
        <Route path="/users/:id" element={<ProfilePage />} />

        {/* Route for creating a new user profile */}
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

        {/* Route for new user registration */}
        <Route
          path="/new-user"
          element={
            <NewUserForm
              onAdd={function (newUser: User): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />

        {/* Route for past reads */}
        <Route path="/past-reads" element={<PastReads />} />
        <Route path="/book-details/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
