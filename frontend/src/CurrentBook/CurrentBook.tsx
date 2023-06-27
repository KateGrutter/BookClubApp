
import NoImage from "../assets/NoImage.png";
import "./CurrentBook.css";

export function CurrentBook() {
  return (
    <div className="current-book">
      <h3>Current Read: Once Upon a Wardrobe</h3>
      <div>
        <img src={NoImage} alt="No image found" />
      </div>
    </div>
  );
}

//this is basic (dummy) component
//change state with button 'set current book'
//function to remove from current, but add to past read
//mark as read button (finished)
//menu button past books
//service call for current book
