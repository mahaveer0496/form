import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';

const App = ({ data, submitting }) => (
  <div>
    <Form />
    {submitting && <p>Loading....</p>}
    {(!submitting && data) && <p>{data.firstName} - {data.lastName} - {data.age}</p>}
  </div>
);
const mapStateToProps = ({ data, submitting }) => ({ data, submitting });
export default connect(mapStateToProps, null)(App);
