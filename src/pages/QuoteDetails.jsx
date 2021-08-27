import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { DUMMY_QUOTES } from './AllQuotes';

const QuoteDetails = () => {
  const { quoteId } = useParams();
  console.log(quoteId);
  // surasti ir atrinkti objeksta is DUMMY masyvo kuriame siuo metu yra puslapis
  return (
    <>
      <h2>QuoteDetails page</h2>
      <p>Quote id: {quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
// sukurti toki route su dinamine dalimi http://localhost:3000/quotes/some-quote/comment
