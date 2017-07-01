import React from 'react';
import { connect } from 'react-redux';

import { submit } from './../redux/action';

const Form = ({ submit }) => {
  let firstName = null;
  let lastName = null;
  let age = null;
  const submitHandler = (event) => {
    event.preventDefault();
    submit({
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={ref => firstName = ref} placeholder="Enter First Name" />
      <input type="text" ref={ref => lastName = ref} placeholder="Enter Last Name" />
      <input type="text" ref={ref => age = ref} placeholder="Enter Age" />
      <input type="submit" />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  submit: (email, password) => dispatch(submit(email, password)),
});

export default connect(null, mapDispatchToProps)(Form);
