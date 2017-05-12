export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COUNT = 'SET_COUNT';
export const SET_BUTTON_COUNT = 'SET_BUTTON_COUNT';

export function incrementAction() {
  return { type: INCREMENT }
}

export function decrementAction() {
  return { type: DECREMENT}
}

export function setCountAction( count ) {
  return { type: SET_COUNT, count}
}

export function setButtonCountAction( count ) {
  return { type: SET_BUTTON_COUNT, count}
}
