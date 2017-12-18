// Actions
const LAUNCH_POP_UP = 'LAUNCH_POP_UP';
const CLOSE_POP_UP = 'CLOSE_POP_UP';
const SIGN_UP = 'SIGN_UP';

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LAUNCH_POP_UP:
      return {
        ...state,
        showModal: true,
        activeTimeSlot: action.timeSlot
      };
    case CLOSE_POP_UP:
      return {
        ...state,
        showModal: false,
        activeTimeSlot: null
      };
    case SIGN_UP:
      return {
        ...state
        // timeSlot: false
      };
    default:
      return state;
  }
}

// Action Creators
export const launchPopUp = timeSlot => ({ type: LAUNCH_POP_UP, timeSlot });
export const closePopUp = timeSlot => ({ type: CLOSE_POP_UP, timeSlot });
export const handleSubmit = formData => ({ type: SIGN_UP, formData });

// form submit
// export const handleSubmit = formData => (dispatch, getState) => {
//   let state = getState();
//   console.log(state);
//   console.log(formData);
//   signUp(formData);
// };

const initialState = {
  showModal: false,
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
