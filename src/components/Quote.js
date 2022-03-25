import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { fetchStart, fetchSuccess, fetchFail } from './../actions';
import { getQuote, fetchFail } from '../actions';

const Quote = (props) => {
  const { quote, author, isFetching, error } = props;
  
  useEffect(() => {
    props.getQuote();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching your quote!</h2>;
  }

  const handleClick = ()=> {
    getQuote();
  }

  const handleError = () => {
    props.fetchFail("YOU HIT THE ERROR BUTTON!!!");
  }

  return (
    <>
      <div>
        <h2> {quote} {author} </h2>
      </div>
      
      <button onClick={handleClick}>Get new quote</button>
      <button onClick={handleError}>ERROR BUTTON</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getQuote, fetchFail })(Quote);