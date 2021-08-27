import QuoteForm from '../components/quotes/QuoteForm';
const NewQuote = () => {
  const addQuotHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuotHandler} />;
};

export default NewQuote;
