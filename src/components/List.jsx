import React from 'react';
import PropTypes from 'prop-types';
import TimeSlot from './TimeSlot';

const List = ({ timeSlots, onClickTimeSlot }) => (
  <ul>
    {timeSlots.map((timeSlot, index) => (
      <TimeSlot
        key={index}
        {...timeSlot}
        onClick={() => onClickTimeSlot(index)}
      />
    ))}
  </ul>
);

List.propTypes = {
  timeSlots: PropTypes.arrayOf(
    PropTypes.shape({
      hour: PropTypes.number.isRequired,
      available: PropTypes.bool.isRequired,
      onClick: PropTypes.func.isRequired,
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onClickTimeSlot: PropTypes.func.isRequired
};

export default List;
