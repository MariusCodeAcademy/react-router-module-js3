import QuoteForm from '../components/quotes/QuoteForm';
const NewQuote = () => {
  const addQuotHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuotHandler} />;
};

export default NewQuote;

// po add quote veiksmo programiskai nunaviguoti is sio(NewQuote) psl i AllQuotes puslapi
