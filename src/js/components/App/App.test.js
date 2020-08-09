import React from 'react';
import renderer from 'react-test-renderer';
import { App } from './App';

describe('App Snapshot', () => {
  it('Whole App rendered successfully', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
