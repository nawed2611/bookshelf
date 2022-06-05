import React, { useState } from "react";
import "../Styles/Home-Style.css";

export default function () {

  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [bookFile, setBookFile] = useState([]);

  function onBookNameChange(e){
    setBookName(e.target.value);
  }

  function onAuthorChange(e){
    setAuthor(e.target.value);
  }

  function onBookFileChange(e){
    setBookFile(e.target.files[0]);
  }

  function handleClick(e){
    e.preventDefault();
    console.log(bookName, author, bookFile);
  }

  function handleSubmit(){
      const postURL = "http://localhost:8800/api/book";
      fetch(postURL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookName: bookName,
          author: author
        })
      }).then( ()=> {
        alert("Your Book is Added!");

      })
  }


  return (
    <div className="DashBoard">
      <form onSubmit={handleSubmit}>
      <h1>DashBoard</h1>
        <label>
          Book Title :
          <input required type="text" value={bookName} onChange={onBookNameChange} name="bookName" placeholder="Enter Book Name here..." />
        </label>

        <label>
          Author Name :
          <input type="text" value={author} onChange={onAuthorChange}  name="author" placeholder="Enter Author Name here..." />
        </label>

        <label>
          Upload your Book :
          <input type="file" value={bookFile} onChange={onBookFileChange} name="bookFile" />
        </label>

        <button onClick={handleClick} type="submit">Submit</button>

      </form>

      <div className="BooksDiv">
        <h1>Your Books</h1>
        <p>All Your Books are here-</p>
      </div>
    </div>
  );
}
