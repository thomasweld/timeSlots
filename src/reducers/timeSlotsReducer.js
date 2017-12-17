import LAUNCH_POP_UP from '../actions/timeSlotActions';

export default function timeSlotsReducer(state = {}, action) {
  // if (typeof state === 'undefined') {
  //   const state = {}; // If state is undefined, initialize it with a default value
  // }

  if (action.type === LAUNCH_POP_UP) {
    return {
      ...state,
      popUpLaunched: true
    };
  }
  // else if (action.type === CLOSE_POP_UP) {
  //   return {
  //     ...state,
  //     popUpLaunched: false
  //   };
  // }
  return state; // In case an action is passed in we don't understand
}
