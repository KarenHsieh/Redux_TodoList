
// const initialState = {
//   inputValue: '',
//   items: ['default']
// }

function reducer(state = {}, action) {

  

  switch(action.type) {
    case 'ADD_ITEM':
        console.warn([...state.items, action.payload.inputValue]);
        console.warn(action.payload.inputValue);
      return {
        ...state,
        items: [...state.items, action.payload.inputValue]
      }
    // case 'UPDATE_TEXT':
    //   return {
    //     inputValue: state.inputValue
    //   }
    default:
        return state;
  }
}

export default reducer;