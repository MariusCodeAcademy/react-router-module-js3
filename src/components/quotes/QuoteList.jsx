import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {(props.quotes || []).map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;

// QuoteList.jsx
// virs saraso prideti div su klase "sorting" is importuoto css
// viduje patalpinti mygtuka su pavadinimu sort Asc
// prideti mygtuko handleri sortHandler()
// handlerio viduje isrikiuoti gaunamus quotes abeceles(a-z) tvarka pagal autoriu
// antra karta paspaudus isrikiavimo tvarka pasikeicia (z-a)
