import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BookSearchDetails from './BookSearchDetails';
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const BookSearch= ({ books,shelfs,onClassify})=> {
  const [searchQuery,setSearchQuery] = useState("");

  const updateText = (searchText) => {
      setSearchQuery(searchText);
      if(searchText!=="") filterBooks(searchText)//:books;
  };

  const [results,setResults] = useState([]);

  const clearText = () => {
    updateText("");
    setResults(books.length>0?books:[]);
  };
     const filterBooks = async (textTyped) => {
     if(textTyped !== ""){
        let i=0;
        console.log("textTyped");
        console.log(textTyped);
        
       // let resultsBooks = await (textTyped === "") ? books : books.filter((c) => c.title.toLowerCase().includes(textTyped.toLowerCase()));
       let resultsBooks = await BooksAPI.search(textTyped);
       let resultBooks = [];
       let ids = books.map(a => a.id);
       console.log("ids");
       console.log(ids);
       console.log(books);
       // console.log(books['IOejDAAAQBAJ']);
       //update resultsBook with shelf property from original local version
        if(resultsBooks.length>0) {
          for (const el of resultsBooks) {
            let current=ids.includes(el.id)?books.filter(b=>b.id === el.id)[0]:0;
            console.log(current.length);
            let obj = {'id':el.id,'book':{...el,shelf:(current !==0 ?current.book.shelf:'-1')}};
           resultBooks.push(obj);
        }

            setResults(resultBooks);
            console.log("results....");
            console.log(resultBooks);
        }
        else setResults([]);
      }
      
      else  setResults(books);
       };
    
    return (<div>
      <input  
          className="text"
          type="text"
          placeholder="Search Books"
          value={searchQuery}
          onChange={(event) => updateText(event.target.value)} />
       <button onClick={()=>{ filterBooks(searchQuery)}}>Search</button>
        
        <button onClick={clearText}>Show all</button>
        <Link to="/" className="back-button">
         Back
       </Link>
       
        <BookSearchDetails results={results}  shelfs={shelfs} onClassify={onClassify} />
       

    </div>);
   }
   BookSearch.propTypes = { 
    books: PropTypes.array.isRequired,
    shelfs: PropTypes.array.isRequired,
    onClassify: PropTypes.func.isRequired,
};
   export default BookSearch;