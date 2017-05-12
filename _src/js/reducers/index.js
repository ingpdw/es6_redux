import { combineReducers } from 'redux';
import {INCREMENT, DECREMENT, SET_COUNT, SET_BUTTON_COUNT} from '../actions';

const initialCountState = {
  count: 0
};

const initialButtonCount = 10;

function myCount( state = initialCountState, action ) {
  switch ( action.type ) {
  case INCREMENT:
    return Object.assign({}, state, {
      count: ++state.count
    });
  case DECREMENT:
    return Object.assign({}, state, {
      count: --state.count
    });
  case SET_COUNT:
    return Object.assign({}, state, {
      count: action.count
    });
  default:
    return state;
  }
}

function buttonCount( state = initialButtonCount, action ) {
  switch ( action.type ) {
  case SET_BUTTON_COUNT:
    return state = action.count;
  default:
    return state;
  }
}

const reducer = combineReducers({myCount, buttonCount});

export default reducer;
