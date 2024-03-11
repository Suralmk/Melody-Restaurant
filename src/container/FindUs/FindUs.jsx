import './findus.css'
import {images} from '../../constants'
import {SubHeading} from '../../components'
const FindUs = () => {
  return (
    <div className='app__findus section__padding flex__center' id='contact'>
      <div className="app__findus-content">
        <h1>Find Us</h1>
        <SubHeading title="Where we are"/>
        <p>+251-987-45-54</p>
        <p>+251-333-11-12</p>
        <p>Dessie, Shell</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorem, eveniet dicta alias, sint itaque dignissimos quasi lib!</p>
      </div>

      <div className="app__findus-image">
        <img src={images.cafe7} alt="image in findus" />
      </div>
    </div>
  )
}

export default FindUs
