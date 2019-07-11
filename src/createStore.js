export default function createStore(reducer) {
  
  let state;

  function dispatch(action) {
    state = reducer(state,action);
    render();
  }

  function getState(){
    return state;
  }

  dispatch({type: 'INCREASE_COUNT'})
  
  return {
    dispatch,
    getState
  }



}

function render() {
  let container = document.getElementById('container');
  
}