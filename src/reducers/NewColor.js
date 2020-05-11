const initState = {
  bgFirst: {
    past: [],
    present: 'orange',
    future: []
  },
  bgSecond: {
    past: [],
    present: 'lightblue',
    future: []
  }
}

const newColorReducer = (state = initState, action) => {

  const { bgFirst, bgSecond } = state

  switch (action.type) {
    case 'NEW_COLOR':
      const colorToAddToPast = bgFirst.present;
      return {
        ...state,
        bgFirst: {
          past: [...bgFirst.past, colorToAddToPast],
          present: action.payload,
          future: []

        }
      }
    case 'NEW_COLOR_SECOND':
      const colorToAddToPastSecond = bgSecond.present;
      return {
        ...state,
        bgSecond: {
          past: [...bgSecond.past, colorToAddToPastSecond],
          present: action.payload,
          future: []
        }
      }

    case 'UNDO':
      const previous = bgFirst.past[bgFirst.past.length - 1]
      const newPast = bgFirst.past.slice(0, bgFirst.past.length - 1)
      const colorToAddToFuture = bgFirst.present;
      return {
        ...state,
        bgFirst: {
          past: newPast,
          present: previous,
          future: [...bgFirst.future, colorToAddToFuture]
        }
      }

    case 'UNDO_SECOND':
      const previousSecond = bgSecond.past[bgSecond.past.length - 1]
      const newPastSecond = bgSecond.past.slice(0, bgSecond.past.length - 1)
      const colorToAddToFutureSecond = bgSecond.present;

      return {
        ...state,
        bgSecond: {
          past: newPastSecond,
          present: previousSecond,
          future: [...bgSecond.future, colorToAddToFutureSecond]
        }
      }

    case 'REDO':
      const next = bgFirst.future[bgFirst.future.length - 1]
      const newFuture = bgFirst.future.slice(0, bgFirst.future.length - 1)
      return {
        ...state,
        bgFirst: {
          past: [...bgFirst.past, bgFirst.present],
          present: next,
          future: newFuture
        }
      }

    case 'REDO_SECOND':
      const nextSecond = bgSecond.future[bgSecond.future.length - 1]
      const newFutureSecond = bgSecond.future.slice(0, bgSecond.future.length - 1)
      return {
        ...state,
        bgSecond: {
          past: [...bgSecond.past, bgSecond.present],
          present: nextSecond,
          future: newFutureSecond
        }
      }

    default:
      return state;
  }
}

export default newColorReducer; 