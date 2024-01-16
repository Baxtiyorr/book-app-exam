import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className='bg-[#FF971D] text-white py-[31px]'>
        <div className="contaiiner">
           <div className="footer__content flex gap-[329px] justify-end max-[715px]:gap-[229px] max-[606px]:gap-[129px]">
            <div className="date font-normal text-base">
                2020 MYBOOK
            </div>
            <div className="links">
                <ul className="flex gap-[47px] ">
                    <li><Link to={'/explorer'} className="font-medium text-base">Explorer</Link></li>
                    <li><Link to={'/shop'} className="font-medium text-base">Shop</Link></li>
                    <li><Link to={'/about'} className="font-medium text-base">About</Link></li>
                </ul>
            </div>
           </div>
        </div>
    </footer>
  )
}

export default Footer
