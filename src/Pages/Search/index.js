import React, { useState } from 'react';
import axios from 'axios';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './styles.css';

function App() {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const apiKey = "AIzaSyD3x5-6W2oQ7d7_AyVxP4nek_6mme1Y5ic";

  function handleChange(e){
    const book = e.target.value;
    setBook(book);
  }
  
  function handleSubmit(e){
    e.preventDefault();
    //console.log(book);
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
    .then(data => {
      //console.log(data);
      //console.log(data.data.items);
      setResult(data.data.items);
    });
  }

  return (
    <>
      <Header/>

      <div className="container">
        <div className="search-container">
          <form onSubmit={handleSubmit} className="form-inline">
            <div class="form">
              <input 
                id="teste"
                type="text" 
                onChange={handleChange}
                className="form-control mt-10" 
                placeholder="Pesquise por livros" 
                autoComplete="off"
                />
              <button type="submit" className="btn ">Pesquisar</button>
            </div>
          </form>
        </div>

        <div className=" grid-container">  
          {result.map(book => (
            <div className="grid-item">
              <div className="image">
                <a target="_blank" key={book.id} href={book.volumeInfo.previewLink}>
                  <img  src={book.volumeInfo.imageLinks === undefined ? "" : book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
                </a>
              </div>
              <div className="infos">
                <p className="name_book"><b>Nome do livro: </b>{book.volumeInfo.title}</p>
                <p className="name_author"><b>Nome do autor: </b>{book.volumeInfo.authors}</p>
                <p className="description"><b>Editora: </b>{book.volumeInfo.publisher}</p>
                <p className="ano"><b>Data de Publicação: </b>{book.volumeInfo.publishedDate}</p>
              </div>
                <div className="button-container">
                  <a target="_blank" key={book.id} href={book.volumeInfo.previewLink}>
                    <button id="description-button">Ler amostra ou comprar</button>
                  </a>
                </div>
            </div>
          ))}
          </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
