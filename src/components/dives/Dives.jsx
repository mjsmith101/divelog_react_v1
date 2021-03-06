import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import DiveLogContext from '../../context/divelog/DiveLogContext'
import Dive from './Dive'
import Spinner from '../../components/layout/Spinner'

function Dives() {
  const { loading, diveData, dispatch } = useContext(DiveLogContext)

  const [diveIndex, setDiveIndex] = useState(0)

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getDives = async () => {
      const result = await axios('http://localhost:5000/dives');
      dispatch({type: 'GET_DIVES', payload: result.data})
    }
    
    getDives()
  }, []) // empty dependency array because we want this to only once, when it loads

  const onGetNextDiveBtnClicked = (e) => {
    e.preventDefault();  // so it does not submit to a page

    diveIndex < (diveData.length -1) ? setDiveIndex(diveIndex+1): setDiveIndex(diveData.length-1)
  }

  const onGetPrevDiveBtnClicked = (e) => {
    e.preventDefault();  // so it does not submit to a page

    diveIndex > 0 ? setDiveIndex(diveIndex-1): setDiveIndex(0)
  }

  if (loading) {
    return <Spinner />
  } else if (diveData.length > 0) {
    return (
      <div>
        <div id='nextPrevBtnGroup'>
          <button id="getPrevDiveBtn" className="btn" onClick={onGetPrevDiveBtnClicked}>Prev Dive</button>
          <button id="getNextDiveBtn" className="btn" onClick={onGetNextDiveBtnClicked}>Next Dive</button>
        </div>
        <Dive diveInfo={diveData[diveIndex]} />
      </div>
    )
  } else {
    return null
  }
}

export default Dives