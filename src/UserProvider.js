import React ,{useState} from "react";
import MyContext from "./MyContext";
import BookList from "./Booklist";

const UserProvider = ({children}) =>{
    const [books, setbooks] = useState(BookList);
    
    
    const addbook = (book) => {
    book.id = books.length + 1;
    setbooks([...books, book]);
    };

    const deletebook = (id) => {
    setbooks(books.filter((book) => book.id !== id));
     };
    

    const [editing, setEditing] = useState(false);

    const initialBook = { id: null, title: "", author: "" };

    const [currentBook, setCurrentBook] = useState(initialBook);

    const editbook = (id, book) => {
    setEditing(true);
    setCurrentBook(book);
  };

  const updateBook = (newBook) => {
    setbooks(
      books.map((book) => (book.id === currentBook.id ? newBook : book))
    );
    setCurrentBook(initialBook);
    setEditing(false);
  };

  return (
    <MyContext.Provider value={{ books, addbook,deletebook,editbook
        ,updateBook , currentBook, editing,setEditing}}>
            {children}
        </MyContext.Provider>
  );
};
export default UserProvider;