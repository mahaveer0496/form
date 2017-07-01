import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  submitting: false,
  data: '',
};

/*
reducer is a simple functions takes an Object (state) gives new obejct ( state )
depending on the TYPE of ACTION.
when SUBMISSION_START it returns new state with submitting:false so that
we can show `Loading` animation or something,
when SUBMISSION_SUCCESS new state is returned with `data : action.data`
SUBMISSION_FAIL is just like SUBMISSION_START

Note: Most important part - state should never be mutated
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMISSION_START':
      return Object.assign({}, state, {
        submitting: true,
        data: '',
      });

    case 'SUBMISSION_SUCCESS':
      return Object.assign({}, state, {
        submitting: false,
        data: action.data,
      });

    case 'SUBMISSION_FAIL':
      return Object.assign({}, state, {
        submitting: false,
        data: 'some error',
      });
    default: return state;
  }
};

export default createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
