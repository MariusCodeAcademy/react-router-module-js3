import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetails from './pages/QuoteDetails';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetails />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route to='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

/*
domain.com/ peradresuoti i quotes psl

QuoteDetails psl aspausdinti quoteId


domain.com/quotes 
domain.com/quotes/:quoteId 
domain.com/new-quote

Sukurti puslapiu komponentus(pages)
AllQuotes, NewQuote, QuoteDetails 


Prideti 404 page not found salyga ir NotFound puslapio komponenta
*/
