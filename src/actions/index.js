export const changeColorAction = (colorPayload) => {
  return {
    type: 'NEW_COLOR',
    payload: colorPayload
  }
}

export const changeColorActionSecond = (colorPayload) => {
  return {
    type: 'NEW_COLOR_SECOND',
    payload: colorPayload
  }
}

export const undoColorAction = () => {
  return {
    type: 'UNDO'
  }
}

export const undoColorActionSecond = () => {
  return {
    type: 'UNDO_SECOND'
  }
}

export const redoColorAction = () => {
  return {
    type: 'REDO'
  }
}

export const redoColorActionSecond = () => {
  return {
    type: 'REDO_SECOND'
  }
}