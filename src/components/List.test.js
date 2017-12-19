import React from 'react';
import renderer from 'react-test-renderer';
import { List } from './List';

const initialState = {
  activeTimeSlot: {
    hour: '10am',
    available: true,
    name: 'John',
    phoneNumber: '1234566543'
  },
  timeSlots: [
    {
      hour: '9am',
      available: true,
      name: '',
      phoneNumber: ''
    },
    {
      hour: '10am',
      available: true,
      name: '',
      phoneNumber: ''
    },
    {
      hour: '11am',
      available: true,
      name: '',
      phoneNumber: ''
    },
    {
      hour: '12pm',
      available: true,
      name: '',
      phoneNumber: ''
    },
    {
      hour: '1pm',
      available: true,
      name: '',
      phoneNumber: ''
    },
    {
      hour: '2pm',
      available: true,
      name: '',
      phoneNumber: ''
    },
    {
      hour: '3pm',
      available: true,
      name: '',
      phoneNumber: ''
    },
    {
      hour: '4pm',
      available: true,
      name: '',
      phoneNumber: ''
    },
    {
      hour: '5pm',
      available: true,
      name: '',
      phoneNumber: ''
    }
  ]
};

// Snapshot test example
describe('List', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <List
        timeSlots={initialState.timeSlots}
        onClickTimeSlot={() => {}}
        showModal={false}
        activeTimeSlot={initialState.activeTimeSlot}
        handleSubmit={() => {}}
        handleCancel={() => {}}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
