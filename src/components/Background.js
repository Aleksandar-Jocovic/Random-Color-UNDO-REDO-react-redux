import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeColorAction, redoColorAction, undoColorAction } from '../actions';
import '../App.css'

const Background = ({ handleChange }) => {

  const dispatch = useDispatch();

  const newColor = useSelector(state => state.bgFirst.present);
  const pastLength = useSelector(state => state.bgFirst.past).length;
  const futureLength = useSelector(state => state.bgFirst.future).length;


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
      <button className="btnStyle" onClick={() => dispatch(changeColorAction(handleChange()))}>Change</button>

      {pastLength > 0 ? <button className="btnStyle" onClick={() => { dispatch(undoColorAction()) }}>UNDO</button> : null}

      {futureLength > 0 ? <button className="btnStyle" onClick={() => dispatch(redoColorAction())}>REDO</button> : null}
    </div>
  )
}

export default Background
