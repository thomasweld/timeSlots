import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as listActions from '../ducks/listDuck';

class List extends React.Component {
  render() {
    let showList;
    if (this.props.timeSlots) {
      showList = this.props.timeSlots.map(timeSlot => (
        <li
          onClick={this.props.onClickTimeSlot}
          style={{
            backgroundColor: timeSlot.available ? 'red' : 'none'
          }}
        >
          {timeSlot.hour}
          {!timeSlot.available && ` - Booked by ${timeSlot.name}`}
        </li>
      ));
    }
    return (
      <div>
        <h1>Time Slots</h1>
        <ul>{showList}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timeSlots: state.listReducer.timeSlots
});

const mapDispatchToProps = dispatch => ({
  onClickTimeSlot: listActions.launchPopUp
});

List.propTypes = {
  timeSlots: PropTypes.array.isRequired,
  onClickTimeSlot: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps())(List);
