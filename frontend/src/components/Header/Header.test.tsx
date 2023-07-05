import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

test("clicking the logout link redirects to the home page", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const logoutLink = screen.getByText("Logout");

  fireEvent.click(logoutLink);

  expect(window.location.pathname).toBe("/");
});

test("clicking the home link redirects to the home page", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const HomeLink = screen.getByText("Home");

  fireEvent.click(HomeLink);

  expect(window.location.pathname).toBe("/feed");
});

test("clicking the members link redirects to the MemberList page", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const MembersLink = screen.getByText("Members");

  fireEvent.click(MembersLink);

  expect(window.location.pathname).toBe("/users");
});

test("clicking the Past Reads link redirects to the past-reads page", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const PastReadsLink = screen.getByText("Past Reads");

  fireEvent.click(PastReadsLink);

  expect(window.location.pathname).toBe("/past-reads");
});
