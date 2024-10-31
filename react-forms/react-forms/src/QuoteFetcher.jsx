import { useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function FetchQuote() {
  const [quote, setQuote] = useState({});
  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
  }

  return (
    <div>
      <button onClick={fetchQuote}>Get Quote Using Handler</button>
      <h1>{quote.text}</h1>
      <h2>{quote.author}</h2>
    </div>
  );
}
