import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';


const state = {
  turnData: {
    books: ['Things fall apart', 'There was a country', 'My bio'],
    author: {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: [ 'The Adventures of Huckleberry Finn' ]
    }
  },
  highlight: 'none'
};

describe('Author Quiz', () => {
  it('have page title', () => {
    const { getByText } = render(<AuthorQuiz {...state} onAnswerSelected={() => {}}/>);
    const title = getByText(/Author Quiz/);
    expect(title).toBeInTheDocument();
  });

  it('should have no background color', () => {
    const { getByTestId } = render(<AuthorQuiz {...state} onAnswerSelected={() => {}}/>);
    const turnElement = getByTestId('turn');
    expect(turnElement.style.backgroundColor).toBe('');
  });

  it('should have a red background color', () => {
    const { getByTestId } = render(<AuthorQuiz {...(Object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected={() => {}}/>);
    const turnElement = getByTestId('turn');
    expect(turnElement.style.backgroundColor).toBe('red');
  });

  it('should have a green background color', () => {
    const { getByTestId } = render(<AuthorQuiz {...(Object.assign({}, state, {highlight: 'correct'}))} onAnswerSelected={() => {}}/>);
    const turnElement = getByTestId('turn');
    expect(turnElement.style.backgroundColor).toBe('green');
  });
});


