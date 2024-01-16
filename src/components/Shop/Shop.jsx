import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useFilterContext } from '../useContext/FilterContext';
import { getBooks } from '../../redux/slice/booksFetchSlice';
import rates from '../../assets/Icons/rates.svg'



import '../Books/Books.scss'
import './Shop.scss'



const Shop = () => {
  const dispatch = useDispatch();
  const mainData = useSelector(state => state.getData)
  const {selectedGenre} = useFilterContext()
  const {books} = mainData
console.log(mainData);
  useEffect(() =>{
      dispatch(getBooks(`https://www.googleapis.com/books/v1/volumes?q=${selectedGenre}+inauthor:keyes&key=AIzaSyCwGYpkfGpJVXIVrR7Qo39pWNqxG149Ssk`))
  }, [])
  return (
    <>
     <div className="books__wrapper">
        <div className="books-container">
            <div className="recommendet">
                
                <div className="book__wrapper">

                    {
                        books?.items?.map((books, index) =>(
                        <Link to={`/book/${books.id}`} key={index} className='py-[0] px-[0]'>
                            <div className="book shop-book" >
                                
                                <img className='book-img shop-book-img' src={books.volumeInfo.imageLinks.thumbnail} alt={books.volumeInfo.title} />
                                
                                <div className="book__content">
                                <h2>{books.volumeInfo.title}</h2>
                                <h3>{books.volumeInfo.authors[0]}</h3>
                                <div className='flex items-center gap-[26px]'>
                                <span><img src={rates} alt="rates" /></span> <span>1,988,288 votes</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
                                <button className='shop-btn'>Buy Now</button>
                                </div>
                            </div>
                            </Link>
                        ))
                    }                    
                </div>
                
            </div>    
        </div>
    </div> 
    </>
  )
}

export default Shop
