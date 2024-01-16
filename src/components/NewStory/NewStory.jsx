

import './NewStory.scss'

import '../Books/Books'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useFilterContext } from '../useContext/FilterContext';
import { useEffect } from 'react';
import { getStoryBooks } from '../../redux/slice/storySlice';
import { API_KEY } from '../../config/apis';
import rates from '../../assets/Icons/rates.svg'


const NewStory = () => {
    const dispatch = useDispatch();
    const storyData = useSelector(state => state.getStory)
    const {selectedGenre} = useFilterContext()
    const {story} = storyData

    console.log(selectedGenre);
    useEffect(() =>{
        dispatch(getStoryBooks(`https://www.googleapis.com/books/v1/volumes?q=${selectedGenre ? selectedGenre : 'story'}+inauthor:keyes&key=${API_KEY}`))
    }, [selectedGenre])


  return (
    <section>
      <div className="books__main-wrapper mt-[71px]">
        <div className="books-container">
            <div className="recommendet">
                <h2 className='title text-center'>This new story</h2>
                <div className="book__wrapper">

                    {
                        story?.items?.map((books, index) =>(
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
                    
                </div>
                
            </div>    
        </div>
           
    </div> 
    </section>
  )
}

export default NewStory
