import header from '../assets/dance_header_1.png'
import './header.css'


const ImageHeader = (props) => {
  return(
  <div className='container'>
    <img style={{width:'100%'}} src={header}></img>
  </div>
  )
}

export default ImageHeader