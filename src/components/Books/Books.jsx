import { getBooks } from '../../redux/slice/booksFetchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useFilterContext } from '../useContext/FilterContext';

import rates from '../../assets/Icons/rates.svg'




import './Books.scss'
import { useEffect } from 'react';
import PopularBooks from './PopularBooks';
import { Link } from 'react-router-dom';
import NewStory from '../NewStory/NewStory';

const Books = () => {
    const dispatch = useDispatch();
    const mainData = useSelector(state => state.getData)
    const {selectedGenre} = useFilterContext()
    const {books} = mainData

    console.log(selectedGenre);
    console.log(mainData);
    useEffect(() =>{
        dispatch(getBooks(`https://www.googleapis.com/books/v1/volumes?q=${selectedGenre}+inauthor:keyes&key=AIzaSyCwGYpkfGpJVXIVrR7Qo39pWNqxG149Ssk`))
    }, [selectedGenre])
  return (
    <div>
     <div className="books__main-wrapper">
        <div className="books-container">
            <div className="recommendet">
                <h2 className='title'>Recommended</h2>
                <div className="book__wrapper">

                    {
                        books?.items?.map((books, index) =>(
                        <Link to={`/book/${books.id}`} key={index} >
                            <div className="book" >
                                
                                <img className='book-img' src={books?.volumeInfo?.imageLinks?.thumbnail} alt={books.volumeInfo.title} />
                                
                                <div className="book__content">
                                <h2>{books.volumeInfo.title}</h2>
                                <h3>{books.volumeInfo.authors[0]}</h3>
                                <div className='flex items-center gap-[26px]'>
                                <span><img src={rates} alt="rates" /></span> <span>1,988,288 votes</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
                                </div>
                            </div>
                            </Link>
                        ))
                    }

                    {/* <div className="book">
                        <img className='book-img' src={image} alt="book" />
                        <div className="book__content">
                        <h2>All the light we cannot see</h2>
                        <h3>by anthony doerr</h3>
                        <div className='flex items-center gap-[26px]'>
                        <span><img src={rates} alt="rates" /></span> <span>1,988,288 votes</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
                        </div>
                    
                    </div> */}
                    
                </div>
                
            </div>    
        </div>
        <PopularBooks/>    
    </div> 
                    <NewStory/>
    </div>
  )
}

export default Books
