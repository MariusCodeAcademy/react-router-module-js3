import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { DUMMY_QUOTES } from './AllQuotes';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
/* 
 [
  { id: 'q1', author: 'Mike', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Jane', text: 'Learning React is great!' },
  { id: 'q3', author: 'James', text: 'Learning React is awesome easy!' },
];
*/
const QuoteDetails = () => {
  const { quoteId } = useParams();
  console.log(quoteId);
  // surasti ir atrinkti objeksta is DUMMY masyvo kuriame siuo metu yra puslapis
  const currentQuoteObject = DUMMY_QUOTES.find(
    (oneOfmanyObjects) => oneOfmanyObjects.id === quoteId
  );
  console.log(currentQuoteObject);
  // nerasta quote
  if (!currentQuoteObject) {
    return <p>No Quote found</p>;
  }

  return (
    <>
      <HighlightedQuote
        text={currentQuoteObject.text}
        author={currentQuoteObject.author}
      />

      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
// sukurti toki route su dinamine dalimi http://localhost:3000/quotes/some-quote/comment
// panaudoti HighlightedQuote componenta atvaizduoti quoteDetails

// jei quote yra nerastas tai atvaizduoti atitinkamai vartotojui kad negauti klaidos
