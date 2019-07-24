import React from 'react';
import ReactDOM from 'react-dom';

const App = (): JSX.Element => {
  const sum = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <h1>
      Hello
      <p>{sum(1, 2)}</p>
    </h1>
  );
};

ReactDOM.render(<App />, document.getElementById('app-root'));

export default App;
