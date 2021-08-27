import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route path='/quotes' exact>
        <h2>all q</h2>
      </Route>
      <Route path='/quotes/:quoteId'>
        <h2>q details</h2>
      </Route>
      <Route path='/new-quote'>
        <h2>new q</h2>
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
