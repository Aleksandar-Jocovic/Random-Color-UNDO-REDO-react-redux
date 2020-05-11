import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeColorActionSecond, redoColorActionSecond, undoColorActionSecond } from '../actions';
import '../App.css'

const Background = ({ handleChange }) => {

  const dispatch = useDispatch();

  const newColor = useSelector(state => state.bgSecond.present);
  const pastLength = useSelector(state => state.bgSecond.past).length;
  const futureLength = useSelector(state => state.bgSecond.future).length;

  let style = {
    height: '100vh',
    width: '50%',
    background: newColor,
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }

  return (
    <div style={style} onClick={handleChange}>
      <h3 className="hexStyle">hex: {newColor}</h3>

      <button className="btnStyle" onClick={() => dispatch(changeColorActionSecond(handleChange()))}> Change</button>

      {pastLength > 0 ? <button className="btnStyle" onClick={() => { dispatch(undoColorActionSecond()) }}> UNDO </button> : null}

      {futureLength > 0 ? <button className="btnStyle" onClick={() => dispatch(redoColorActionSecond())}>REDO</button> : null}
    </div>
  )
}

export default Background
