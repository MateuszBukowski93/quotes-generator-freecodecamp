import React, { Component } from "react";


class QuotesMachine extends Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: ""
    };
  }

  getRandomQuote = async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const data = await response.json();    
        let arr = data.quotes;
        let index = Math.floor(Math.random()*arr.length);          
    
    this.setState({
      quote: arr[index].quote,
      author: arr[index].author
    });
  };
  componentDidMount(){
      this.getRandomQuote()
  }

  render() {
    return (
      <div id="quote-box">
        <h1 className="heading">Quotes Machine</h1>
        <div id="text" >{this.state.quote}</div>
        <div id="author" >{this.state.author}</div>
        <button id="new-quote" className="btn" onClick={this.getRandomQuote}>
          new Quote
        </button>        
        <a href={encodeURI(`https://twitter.com/intent/tweet?text=${this.state.quote}&hashtags=MateuszBukowski`)} id="tweet" className="btn">
          <i className="fab fa-twitter-square"> Tweet It</i>
        </a>
      </div>
    );
  }
}

export default QuotesMachine;
