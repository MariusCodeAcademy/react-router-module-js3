import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <a className='btn'>View Fullscreen</a>
    </li>
  );
};

// <a className='btn'>
//View Fullscreen turi vesti i quotes details puslapi
//</a>

export default QuoteItem;
