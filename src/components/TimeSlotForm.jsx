import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const TimeSlotForm = props => {
  const { handleSubmit, handleCancel, pristine, submitting } = props;
  return (
    <div className="timeSlotForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <div>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <br />
        <div>
          <label>Phone Number</label>
          <div>
            <Field
              name="phoneNumber"
              component="input"
              type="tel"
              placeholder="Phone Number"
            />
          </div>
        </div>

        <div id="hiddenInput">
          <Field name="hour" component="input" type="text" />
        </div>
        <br />
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

TimeSlotForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'timeSlot'
})(TimeSlotForm);
