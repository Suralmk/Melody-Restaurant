import './findus.css'
import { images } from '../../constants'
import { SubHeading } from '../../components'
const FindUs = () => {
  return (
    <div className='app__findus section__padding flex__center' id='contact'>
      <div className='app__findus-content'>
        <SubHeading title='Where we are' />
        <h1 className='p__style'>Find Us</h1>
        <p className='p__style2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem dolorem, eveniet dicta alias, sint itaque dignissimos
          quasi lib!
        </p>
        <p className='p__style3'>+251-987-45-54</p>
        <p className='p__style3'>+251-333-11-12</p>
        <p className='p__style3'>Dessie, Shell</p>
      </div>

      <div className='app__findus-image'>
        <img src={images.pizza} alt='image in findus' />
      </div>
    </div>
  )
}

export default FindUs
