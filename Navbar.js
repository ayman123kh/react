import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
   

return(
    <>
<div className='amm'>
  
    
<a className="jj">Anime-Site</a>

<Link to="/"><a className="abb">home</a></Link>

<Link to="/About" style={{textDecoration : "none"}}><a className="abb">about</a></Link>
<Link to="/Contact" style={{textDecoration : "none"}}><a className="abb">contact</a></Link>
<Link to="/Add" style={{textDecoration : "none"}}><a className='abb'>Add</a></Link>
<input className="azz" placeholder="filter movie by title" />

<button className="aqq">signin </button>
    
    </div>

    </>
        )
    }


export default Navbar