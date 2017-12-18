import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as listActions from '../ducks/listDuck';
import TimeSlotForm from './TimeSlotForm';

class List extends React.Component {
  render() {
    let showList, showModal;
    if (this.props.timeSlots) {
      showList = this.props.timeSlots.map((timeSlot, index) => (
        <li
          key={index}
          onClick={() => this.props.onClickTimeSlot(timeSlot)}
          style={{
            backgroundColor: timeSlot.available ? 'lightgreen' : 'red'
          }}
        >
          {timeSlot.hour}
          {!timeSlot.available &&
            ` - Booked by ${timeSlot.name} - ${timeSlot.phoneNumber}`}
        </li>
      ));
    }

    if (this.props.showModal && this.props.activeTimeSlot) {
      showModal = (
        <div>
          <h4>Sign Up for {this.props.activeTimeSlot.hour}</h4>
          <TimeSlotForm
            onSubmit={this.props.handleSubmit}
            handleCancel={this.props.handleCancel}
            initialValues={{
              name: `${this.props.activeTimeSlot.name}`,
              phoneNumber: `${this.props.activeTimeSlot.phoneNumber}`,
              hour: `${this.props.activeTimeSlot.hour}`
            }}
          />
        </div>
      );
    }

    return (
      <div>
        <h1>Time Slots</h1>
        <div>{showModal}</div>
        <ul>{!showModal && showList}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timeSlots: state.List.timeSlots,
  showModal: state.List.showModal,
  activeTimeSlot: state.List.activeTimeSlot
});

const mapDispatchToProps = dispatch => ({
  onClickTimeSlot: listActions.launchPopUp,
  handleSubmit: listActions.handleSubmit,
  handleCancel: listActions.handleCancel
});

List.propTypes = {
  timeSlots: PropTypes.array.isRequired,
  onClickTimeSlot: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps())(List);
