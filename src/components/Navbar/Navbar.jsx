import logo from '../../assets/Icons/MYBOOK.svg'
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import './Navbar.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [menuActive, setMenuActive] = useState('')

    const handleClick = () =>{
        if(menuActive){
            setMenuActive('')
        }else{
            setMenuActive('menu-active')
        }
    }
    console.log(menuActive);

  return (
    <>
      <nav className='mb-[78px]'>
        <div className="contaiiner">
            <div className="navbar pt-[33px] flex justify-between items-center">
                <div className="logo-wrapper flex gap-[20px]">
                    <Link to={'/'}><img src={logo} alt="MYBOOK" className='logo-img pr-[20px]'/> </Link>
                    
                     <a href="#"><FiShoppingCart size={24}/></a>
                </div>
                <div className="navbar__content ">
                    <ul className={`  flex gap-[45px] items-center ${menuActive}`}>
                        <li><Link to={'/explorer'} className='text-white'>Explorer</Link></li>
                        <li><Link to={'/shop'} className='text-white'>Shop</Link></li>
                        <li><Link to={'/blog'} className='text-white'>Blog</Link></li>
                        <li><button className='navbar__content-btn bg-white'>Log in</button></li>
                        <button className='remove-btn' onClick={handleClick}><RxCross2 size={30} color='white'/></button>
                    </ul>
                    
                </div>
                <button className='menu-btn' onClick={handleClick}><RxHamburgerMenu size={30} color='white'/></button>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
