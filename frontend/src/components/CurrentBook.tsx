
import { Book } from "../models/Book";


export function CurrentBook() {

    // const [book, setBook] = useState<Book>();

    // useEffect(() => {
    //     getBook().then(data => setBook(data))
    // }, []);


    return(
        <div>
            <h3>Current Read:</h3>
            <div>Insert cover here</div>
            
        </div>
    )
}
//this is basic (dummy) component
//change state with button 'set current book'
//function to remove from current, but add to past read
//mark as read button (finished)
//menu button past books
//service call for current book
