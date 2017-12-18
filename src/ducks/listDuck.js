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
        ...state,
        showModal: false,
        List: {
          timeSlots: action.timeSlots
        }
      };
    default:
      return state;
  }
}

// Action Creators
export const launchPopUp = timeSlot => ({ type: LAUNCH_POP_UP, timeSlot });
export const closePopUp = timeSlot => ({ type: CLOSE_POP_UP, timeSlot });

// side effect
export const handleSubmit = formData => (dispatch, getState) => {
  const state = getState();
  console.log(formData);
  let timeSlots = state.List.timeSlots;
  state.List.timeSlots.forEach((slot, index) => {
    if (formData.hour === slot.hour) {
      slot.name = formData.name;
      slot.phoneNumber = formData.phoneNumber;
      slot.available = false;
      timeSlots[index] = slot;
    }
  });
  console.log();

  dispatch({ type: SIGN_UP, timeSlots });
};

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
