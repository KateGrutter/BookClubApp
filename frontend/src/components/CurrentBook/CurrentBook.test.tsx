import { render, screen } from "@testing-library/react";
import { CurrentBook } from "./CurrentBook";
import BookContext from "../../contexts/BookContext";

describe("CurrentBook", () => {
  it("displays the current book details", () => {
    const currentBook = {
      title: "Book Title",
      authors: ["Author Name"],
      imageLinks: {
        thumbnail: "book-thumbnail-url",
      },
      description: "Book Description",
    };

    render(
      <BookContext.Provider value={{ currentBook }}>
        <CurrentBook />
      </BookContext.Provider>
    );

    expect(screen.getByText("This Months Book")).toBeInTheDocument();
    expect(screen.getByText("Book Title")).toBeInTheDocument();
    expect(screen.getByText("Author Name")).toBeInTheDocument();
    expect(screen.getByAltText("bookcover")).toBeInTheDocument();
    expect(screen.getByText("Book Description")).toBeInTheDocument();
  });
});
