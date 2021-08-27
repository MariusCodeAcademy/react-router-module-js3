import { Route, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetails from './pages/QuoteDetails';
function App() {
  return (
    <Switch>
      <Route path='/quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetails />
      </Route>
      <Route path='/new-quote'>
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;

/*
domain.com/quotes 
domain.com/quotes/:quoteId 
domain.com/new-quote

Sukurti puslapiu komponentus(pages)
AllQuotes, NewQuote, QuoteDetails 
*/
