import React from 'react';
import renderer from 'react-test-renderer';
import { Routes } from '../src/Routes';

it('renders correctly', () => {
    const tree = renderer.create(<Routes />).toJSON();
    expect(tree).toMatchSnapshot();
});
