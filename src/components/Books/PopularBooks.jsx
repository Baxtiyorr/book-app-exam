import { getPopularBooks } from '../../redux/slice/popularBookFetch';
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from 'react';
import { API_KEY } from '../../config/apis';
import rates from '../../assets/Icons/rates.svg'


import "swiper/css";
import './Books.scss'
import './PopularBooks.scss'
import { Link } from 'react-router-dom';

const PopularBooks = () => {
    const dispatch = useDispatch();
    const popularBookData = useSelector(state => state.getPopularBooks)
    const {popularBooks} = popularBookData
    
    console.log(popularBookData);
    useEffect(() =>{
        dispatch(getPopularBooks(`https://www.googleapis.com/books/v1/volumes?q=popular+inauthor:keyes&key=${API_KEY}`))
    }, [])
  return (
    <>
      <div className="books-container">
        <div className="populer mt-[120px]">
            <h2 className='title'>Populer</h2>
            <div className="popular-book-wrapper">
            <Swiper className="mySwiper"
            slidesPerView= {4}
            spaceBetween={2}            

            // breakpoints don't work
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}

            >
              
             

                {
                    popularBooks?.items?.map((popularBook, index) =>(
                      <SwiperSlide key={index}>
                        <Link to={`/book/${popularBook.id}`}>
                         <div className="popular-book">
                        <img className="popular-book-img" src={popularBook?.volumeInfo?.imageLinks?.thumbnail} alt="book" />
                        <h2>{popularBook?.volumeInfo?.title}</h2>
                        <span>{popularBook?.volumeInfo?.publisher}</span>
                        <img className="mt-[12px]" src={rates} alt="rates" />
                        </div>
                        </Link>
                       
                      </SwiperSlide>
                    ))
                }
        
       
      </Swiper>
            </div>
        </div>
      </div>
    </>
  )
}

export default PopularBooks
