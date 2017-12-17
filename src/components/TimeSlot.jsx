import React from 'react';
import PropTypes from 'prop-types';

const TimeSlot = ({ hour, available, onClickTimeSlot, name, phoneNumber }) => (
  <li
    onClick={onClickTimeSlot}
    style={{
      backgroundColor: available ? 'red' : 'none'
    }}
  >
    {hour}
    {!available && ` - Booked by ${name}`}
  </li>
);

TimeSlot.propTypes = {
  hour: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
};

export default TimeSlot;
