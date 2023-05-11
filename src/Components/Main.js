import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div> 
        This the main section
        <li>
            <Link to="/Clock" className='border bg-slate-400 rounded-md border-black'>Clock</Link>
        </li>
    </div>
    
  )
}

export default Main