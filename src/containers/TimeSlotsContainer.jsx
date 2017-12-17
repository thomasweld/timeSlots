import { connect } from 'react-redux';
import launchPopUpForm from '../actions/timeSlotActions';

import List from '../components/List';

const mapStateToProps = state => ({
  timeSlots: [
    {
      hour: 1,
      available: true,
      onClick: () => {},
      name: 'Name',
      phoneNumber: 'Phone Number',
    },
    {
      hour: 2,
      available: true,
      onClick: () => {},
      name: 'Name',
      phoneNumber: 'Phone Number',
    },
    {
      hour: 3,
      available: true,
      onClick: () => {},
      name: 'Name',
      phoneNumber: 'Phone Number',
    },
    {
      hour: 4,
      available: true,
      onClick: () => {},
      name: 'Name',
      phoneNumber: 'Phone Number',
    },
    {
      hour: 5,
      available: true,
      onClick: () => {},
      name: 'Name',
      phoneNumber: 'Phone Number',
    },
    {
      hour: 6,
      available: true,
      onClick: () => {},
      name: 'Name',
      phoneNumber: 'Phone Number',
    },
  ],
});

const mapDispatchToProps = dispatch => ({
  onClickTimeSlot: (id) => {
    dispatch(launchPopUpForm(id));
  },
});

const TimeSlotContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default TimeSlotContainer;
