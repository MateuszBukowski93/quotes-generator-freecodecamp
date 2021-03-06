import React, { useState, useEffect} from "react";
import Twitter from "./components/Twitter"
import Button from "./components/Button"

import "./App.css"

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  
//Get quotes
  const getRandomQuote = async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const data = await response.json();
    let arr = data.quotes;
    let index = Math.floor(Math.random() * arr.length);
    
    setQuote(arr[index].quote);    
    setAuthor(arr[index].author);
  };  
 //Get quote at very beginning
  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
   
    <div id="quote-box">      
      <h1 className="heading">Quotes Machine</h1>
      <div id="text">{quote}</div>
      <div id="author">{author}</div>     
      <Button getRandomQuote={getRandomQuote}/>
      <Twitter quote={quote}/>
      
    </div>
    
  );
};


export default App;
