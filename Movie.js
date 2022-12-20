import {Link} from 'react-router-dom'
const Movie =(props)=>{
    
    
    
    
        return(
            <div className="item">
                {

                 props.listmovie.map(item=>(
                   <div className="page">
                 <img className="imm" src= {item.Image} width= '200px' height='200px'/>
                   <p className="jjj">{item.discrpt}</p>
                   <Link to="/Watch" state = {item} ><button className="watch">watch now</button></Link>
                  </div>
                 ))
                }
            </div>
        )
    
    
    
    }
    export default Movie