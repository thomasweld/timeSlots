import React from 'react';
import renderer from 'react-test-renderer';
import TimeSlot from './TimeSlot';

let timeSlot = {
  hour: 1,
  available: false,
  name: 'John',
  phoneNumber: '1234566543'
};

// Snapshot test example
describe('TimeSlot', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<TimeSlot {...timeSlot} onClick={() => {}} />);
    expect(tree).toMatchSnapshot();
  });
});
