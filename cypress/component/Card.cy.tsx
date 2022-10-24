import React from 'react';
import Card from '../../src/pages/Home/components/Card';
import { cats } from '../../src/mocks/cats';
import { mount } from 'cypress/react18';

describe('<NewQuestionForm />', () => {
  it('should call onSubmit prop', () => {
    mount(<Card item={cats[0]} />);
  });
});
