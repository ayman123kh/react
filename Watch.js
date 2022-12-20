import React from 'react'
import { useLocation } from 'react-router-dom'

const Watch = () => {

    const location = useLocation()
     
    return(
<div>
<div className='rak'>
    
<img className='map' src={location.state.Image}></img>
<div className='ppp'>

    <div className='pml'>
        
        <h1 className='lom'>{location.state.tittle} </h1> 
        <h5 className='ygh'>(5.5k)</h5>
        <img className='etoi' src='https://images.emojiterra.com/google/android-10/512px/2b50.png'></img>
        
    <h1 className='ram'>8.5</h1>
    <h2 className='hyj'>/10</h2>
    </div>
    <h7 className='ecri'>{location.state.discrpt}</h7>
<div className='ase'>
<h5 className='date'>PREMIERE DATE </h5>
<h6 className='april'>April 11,2021</h6>
</div>

<div className='butan'>
    {
        location.state.types.map(item=> (
         <>
         <button id='ani'>{item}</button>
         </>
        ) )
    }


</div>
<div>
<h2>ACTORS</h2>

<div className='gty'>
{
        location.state.Actors.map(Element=> (
         <>
         <h7 className='gad'>{Element}</h7>
         <h7>_________________________________________________________________________________________________</h7>
         </>
        ) )
    }



</div>
<div>
<button id='haff'>Watch Now</button>
</div>

</div>
    </div>
    
</div>







</div>
 )
    
          }
        

export default Watch