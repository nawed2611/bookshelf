import React, { useState } from "react";

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

  function onSubmit(e){
    e.preventDefault();

    console.log(bookName, author, bookFile);
  }


  return (
    <div>
      <h1 style={{margin: "1rem"}}>DashBoard</h1>

      <form>
        <label>
          Book Title :
          <input type="text" value={bookName} onChange={onBookNameChange} name="bookName" placeholder="Enter Book Name here..." />
        </label>

        <label>
          Author Name :
          <input type="text" value={author} onChange={onAuthorChange}  name="author" placeholder="Enter Author Name here..." />
        </label>

        <label>
          Book :
          <input type="file" value={bookFile} onChange={onBookFileChange} name="bookFile" />
        </label>

        <button onClick={onSubmit} type="submit">Submit</button>

      </form>
    </div>
  );
}
