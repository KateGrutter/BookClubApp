//this will have the books to map out when the user searches for a book

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookDetails } from "../../services/BookService";
import { Link } from "react-router-dom";
import BookContext from "../../contexts/BookContext";
import NoImage from "../../assets/NoImage.png";
import "./BookDetails.css"; // Import CSS file for styling
import { Header } from "../Header/Header";

export function BookDetails() {
  const [details, setDetails] = useState<any>();

  const id = useParams().id;

  const { addListBook, setCurrent } = useContext(BookContext);

  useEffect(() => {
    bookDetails(id!).then((data) => setDetails(data.volumeInfo));
  }, [id]);
  // ! means it will not equal null
  return (
    <div>
      <Header />
      <button className="book-details-home">
        <Link to={"/feed"} className="book-details-link">
          Back
        </Link>
      </button>
      <div className="book-details">
        <img
          src={details?.imageLinks.thumbnail || NoImage}
          alt="bookcover"
          className="book-details-image"
        />
        <h3 className="book-details-title">
          {details?.title} by {details?.authors}
        </h3>
        <p className="book-details-description">{details?.description}</p>
        <button
          onClick={() => addListBook(details)}
          className="book-details-button"
        >
          Mark as read
        </button>
        <button
          onClick={() => setCurrent(details)}
          className="book-details-button"
        >
          Mark as current
        </button>
      </div>
    </div>
  );
}
