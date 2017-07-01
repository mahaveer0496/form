import axios from 'axios';

/*
submissionStart etc are action creator as the name says they CREATE actions.
they're just simple function returning an object which type: 'whatEver'
every action creator MUST return an object with TYPE.

*/
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


/*
this is also action creator but is different that it doesnt return a type but
dispatches other actions.
here;s the basic flow.
when this function is invoked, it dispatches submissionStart -
this submissionStart goes into the reducer where action.type is check and based on that
new state is defined.
after start. we make an async call if the call was successfull we dispatch new action
submissionSuccess- now this again goes into the reducer and based on its action.type
new state is defined again.
if fail we just dispatch submissionFail and new state is defined again

*/
export const submit = ({ firstName, lastName, age }) => (dispatch) => {
  dispatch(submissionStart());
  axios.post('http://localhost:3000/api', { firstName, lastName, age })
  .then((res) => {
    if (res.data) return dispatch(submissionSuccess(res.data));
    return dispatch(submissionFail());
  });
};
