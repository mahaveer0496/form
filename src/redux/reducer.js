import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  submitting: false,
  data: '',
};
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
