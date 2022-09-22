import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

const Application = () => {
  const [counter, setCounter] = useState(0);

  return (
    <React.Fragment>
      <main>
        <p className='main-teaser'>
          Custom boilerplate for rapid development of Web Applications.
          <br />
          This project makes use of React, Webpack, TypeScript to serve the best
          environment for development with hot-reloading of modules.
        </p>
        <p className='main-teaser small'>
          Click below button to update the application &quot;counter&quot;
          state. Components will update their states using
          Hot-Module-Replacement technique, without needing to refresh/reload
          whole application.
        </p>
        <br />

        <button onClick={() => setCounter(counter + 1)}>
          Counter <span>{counter}</span>
        </button>
      </main>
    </React.Fragment>
  );
};

export default hot(module)(Application);
