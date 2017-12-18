// Actions
const LAUNCH_POP_UP = 'LAUNCH_POP_UP';
const CLOSE_POP_UP = 'CLOSE_POP_UP';

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LAUNCH_POP_UP:
      return {
        ...state,
        popUpLaunched: true
      };
    case CLOSE_POP_UP:
      return {
        ...state,
        popUpLaunched: false
      };
    default:
      return state;
  }
}

// Action Creators
export const launchPopUp = () => ({ type: LAUNCH_POP_UP });
export const closePopUp = timeSlot => ({ type: CLOSE_POP_UP, timeSlot });

const initialState = {
  timeSlots: [
    {
      hour: '9am',
      available: true,
      name: 'Name',
      phoneNumber: 'Phone Number'
    },
    {
      hour: '10am',
      available: true,
      name: 'Name',
      phoneNumber: 'Phone Number'
    },
    {
      hour: '11am',
      available: true,
      name: 'Name',
      phoneNumber: 'Phone Number'
    },
    {
      hour: '12pm',
      available: true,
      name: 'Name',
      phoneNumber: 'Phone Number'
    },
    {
      hour: '1pm',
      available: true,
      name: 'Name',
      phoneNumber: 'Phone Number'
    },
    {
      hour: '2pm',
      available: true,
      name: 'Name',
      phoneNumber: 'Phone Number'
    },
    {
      hour: '3pm',
      available: true,
      name: 'Name',
      phoneNumber: 'Phone Number'
    },
    {
      hour: '4pm',
      available: true,
      name: 'Name',
      phoneNumber: 'Phone Number'
    },
    {
      hour: '5pm',
      available: true,
      name: 'Name',
      phoneNumber: 'Phone Number'
    }
  ]
};
