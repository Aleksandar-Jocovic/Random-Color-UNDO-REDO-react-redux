

const newColorReducerSecond = (state = initState, action) => {
  switch (action.type) {
    case 'UNDO':
      const previous = state.bgFirst.past[state.bgFirst.past.length - 1]
      const newPast = state.bgFirst.past.slice(0, state.bgFirst.past.length - 1)
      return {
        ...state,
        bgFirst: {
          past: newPast,
          present: previous
        }
      }
    case 'NEW_COLOR':
      const colorToAddToPast = state.bgFirst.present;
      return {
        ...state,
        bgFirst: {
          past: [...state.bgFirst.past, colorToAddToPast],
          present: action.payload
        }
      }

    default:
      return state;
  }
}

export default newColorReducer; 