import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
import './bootstrap.min.css';

function Hero() {
  return (
      <div className="row">
        <div className="jumbotron col-10 offset-1">
          <h1>Author Quiz</h1>
          <p>Select the book written by the author</p>
        </div>
      </div>
  )
}

function Book({title, onClick}) {
  return (
      <div className="answer" data-testid="ans" onClick={onClick.bind(null, title)}>
        <h4>{title}</h4>
      </div>
  )
}

function Turn({ author, books, highlight, onAnswerSelected}) {
  function highlightToBgColor(highlight) {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };
    return mapping[highlight]
  }

  return (
      <div className="row turn" data-testid="turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
        <div className="col-4 offset-1">
          <img src={author.imageUrl}  className="authorImage" alt="Author"/>
        </div>
        <div className="col-6">
          {books.map(title => <Book title={title} key={title} onClick={onAnswerSelected} />)}
        </div>
      </div>
  )
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};

function Continue() {
  return (
      <div>Continue</div>
  )
}

function Footer() {
  return (
      <div id="footer" className="row">
        <div className="col-12">
          <p className="text-muted credit">
            All Images are from <a href="#">Wikipedia</a>
          </p>
        </div>
      </div>
  )
}

function AuthorQuiz({turnData, highlight, onAnswerSelected}) {
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      {/*<Continue show={answerStatus === 'correct'} onContinue={onContinue}/>*/}
      <p>
        {/*<Link to="/add">Add an author</Link>*/}
      </p>
      <Footer/>
    </div>
  );
}

export default AuthorQuiz;

