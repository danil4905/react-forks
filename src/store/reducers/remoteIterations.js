import * as actionTypes from '../actions/actionTypes';

const initialState = {
  error404: false,
};

const copyState = (state) => {
  const newState = JSON.parse(JSON.stringify(state));
  return newState;
};

const occured404 = (state) => {
  const newState = copyState(state);
  newState.error404 = true;
  return newState;
};

const cansel404 = (state) => {
  const newState = copyState(state);
  newState.error404 = false;
  return newState;
};

const remoteIterations = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ERR_404: return occured404(state, action);
    case actionTypes.ERR_404_GONE: return cansel404(state, action);
    default: return state;
  }
};

export default remoteIterations;
