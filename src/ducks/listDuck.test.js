import * as listActions from './listDuck';

describe('ListActions', () => {
  it('should create an action to launch the pop up', () => {
    const timeSlot = {
      hour: '10am',
      available: true,
      name: 'John',
      phoneNumber: '1234566543'
    };
    const expectedAction = { type: 'LAUNCH_POP_UP', timeSlot };
    expect(listActions.launchPopUp(timeSlot)).toEqual(expectedAction);
  });
});
