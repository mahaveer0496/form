import axios from 'axios';

const submissionStart = () => ({
  type: 'SUBMISSION_START',
});

const submissionSuccess = data => ({
  type: 'SUBMISSION_SUCCESS',
  data,
});

const submissionFail = () => ({
  type: 'SUBMISSION_FAIL',
});

export const submit = ({ firstName, lastName, age }) => (dispatch) => {
  dispatch(submissionStart());
  axios.post('http://localhost:3000/api', { firstName, lastName, age })
  .then((res) => {
    if (res.data) return dispatch(submissionSuccess(res.data));
    return dispatch(submissionFail());
  });
};
