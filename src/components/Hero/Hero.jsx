import { GoSearch } from "react-icons/go";

import './Hero.scss'

const Hero = (props) => {
// eslint-disable-next-line react/prop-types
const {prop} = props

  return (
    <div className='hero'>
      <div className="contaiiner">
        <div className="hero__content pb-[123px]">
            <h1>{prop}</h1>

            <h2>find your favorite book and read it here for free</h2>
            <form className="form">
                <div className="form__content flex items-center">
                    <div className="search-icon">
                        <GoSearch size={24} />
                    </div>
                    
                <input type="text" placeholder='Search Book' className="py-[20px] outline-none bg-[#F5F6F8]" />

                </div>
            </form>
        </div>

      </div>
    </div>
  )
}

export default Hero
