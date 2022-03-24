import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import {fetchAnime} from '../../redux/searchAnime/action'
const Navbar = () => {
    const dispatch= useDispatch();
    const [inputValue, setInputValue] =useState("");
  return (
     <div className='input-container'>
        <input class="input-field" value={inputValue} type="text" onChange={(e)=>setInputValue(e.target.value)}></input>
        <button onClick = {()=> dispatch(fetchAnime(1,inputValue))}>GO</button>

     </div>
   
  )
}

export default Navbar