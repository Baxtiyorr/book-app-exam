import { useDispatch, useSelector } from "react-redux"
import { getPopularBooks } from "../../redux/slice/popularBookFetch"
import { useEffect } from "react";



import rates from '../../assets/Icons/rates.svg'

import './Recommended.scss'


const Recommended = () => {
    const dispatch = useDispatch();
    const rec_data = useSelector(state => state.getPopularBooks)
    const {popularBooks} = rec_data

  

    console.log(rec_data);
    useEffect(() =>{
        dispatch(getPopularBooks('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCwGYpkfGpJVXIVrR7Qo39pWNqxG149Ssk'))
    },[])
  return (
    <section className='mt-[160px]'>
      <div className="recomendation__wrapper">
        <h2 className='recomendation__wrapper-title max-[1180px]:text-[#FF971D]'>Cerita Serupa</h2>
        <div className="recomendation__card">
                      {
                        popularBooks?.items?.map((book, index) =>(
                        <div className="recommended-book" key={index}>
                         <img className='book-image' src={book?.volumeInfo?.imageLinks?.thumbnail} alt={book?.volumeInfo?.title} />
                          <div className="book__content">
                          <h2>All the light we cannot see</h2>
                          <h3>by anthony doerr</h3>
                          <div className='flex items-center gap-[26px]'>
                          <span><img src={rates} alt="rates" /></span> <span>1,988,288 votes</span>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
                         </div>
                    
                        </div>
                        ))
                      }
                      
                     

        </div>
      </div>
    </section>
  )
}

export default Recommended
