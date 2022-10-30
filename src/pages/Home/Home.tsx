import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const childClass =
    'child:text-gray-700 child:border child:border-gray-400 child:rounded-lg child:px-4 child:py-2';
  return (
    <div>
      <section className='py-10 border-b'>
        <h1 className='text-center text-blue-700 text-4xl font-bold'>
          MagMagMary React Application
        </h1>
      </section>
      <section className='py-10 border-b'>
        <h6 className='text-gray-700 font-semibold pb-5'>
          The application consist of following technologies:
        </h6>
        <ul className={`flex flex-wrap gap-3 ${childClass}`}>
          <li>
            <a
              href='https://reactjs.org/'
              className='text-gray-500'
              target='_blanck'
            >
              React 18
            </a>
          </li>
          <li>
            <a
              href='https://webpack.js.org/'
              className='text-gray-500'
              target='_blanck'
            >
              Webpack 5
            </a>
          </li>
          <li>
            <a
              href='https://babeljs.io/'
              className='text-gray-500'
              target='_blanck'
            >
              Babel
            </a>
          </li>
          <li>
            <a
              href='https://www.typescriptlang.org/'
              className='text-gray-500'
              target='_blanck'
            >
              TypeScript
            </a>
          </li>
          <li>
            <a
              href='https://www.i18next.com/'
              target='_blanck'
              className='text-gray-500'
            >
              Multi Language with i18n
            </a>
          </li>
          <li>
            <a
              href='https://reactrouter.com/'
              className='text-gray-500'
              target='_blanck'
            >
              React Router 6
            </a>
          </li>
          <li>
            <a
              href='https://redux-toolkit.js.org/'
              className='text-gray-500'
              target='_blanck'
            >
              Redux Toolkit
            </a>
          </li>
          <li>
            <a
              href='https://jestjs.io/'
              target='_blanck'
              className='text-gray-500'
            >
              Unit and Integration test with Jest
            </a>
          </li>
          <li>
            <a
              href='https://www.cypress.io/'
              target='_blanck'
              className='text-gray-500'
            >
              E2E test with Cypress
            </a>
          </li>
        </ul>
      </section>
      <section className='py-10 border-b'>
        <Link to='/cats'>
          <h6 className='text-gray-700 font-semibold pb-2'>The Cats Section</h6>
        </Link>
        <p className='text-gray-500 px-2'>
          This section will load data from node back-end server and has a full
          component and Integration test with Jest.
        </p>
      </section>
      <section className='py-10 border-b'>
        <Link to='/products'>
          <h6 className='text-gray-700 font-semibold pb-2'>
            The Products Section
          </h6>
        </Link>
        <p className='text-gray-500 px-2'>
          This section will load data from node back-end server witht the help
          of redux toolkit and has a full component and Integration test with.
          Jest
        </p>
      </section>
      <section className='py-10 border-b'>
        <h6 className='text-gray-700 font-semibold pb-2'>The Login button</h6>
        <p className='text-gray-500 px-2'>
          This button logins a user with a preconfigured credentials and sets
          the token in localStorage and redirects user to the dashboard page.
        </p>
      </section>
    </div>
  );
};

export default Home;
