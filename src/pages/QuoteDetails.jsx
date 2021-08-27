import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetails = () => {
  const { quoteId } = useParams();
  console.log(quoteId);
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
