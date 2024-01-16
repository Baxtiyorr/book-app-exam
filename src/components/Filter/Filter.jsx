import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useFilterContext } from '../useContext/FilterContext';
import './Filter.scss'

const Filter = () => {
    

  const [filterActive, setFilterActive] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('');
  const [display, setDisplay] = useState('')
    
  const {setValues} = useFilterContext();

  const handleFilterActive = () =>{
    if(filterActive){
      setFilterActive('')
      setDisplay('')
    }else{
      setFilterActive('filter-active')
      setDisplay('display')
    }
  }


  const handleGenreClick = (genre) => {
    setSelectedGenre(genre.toLowerCase());
    setFilterActive('')
    setDisplay('')
    setValues(selectedGenre)
  };



  
  return (
    <> 
    <div className={` max-w-72 w-full relative`}>
     <button className={`toggle-filter-btn ${display}`} onClick={handleFilterActive}>
       <FaArrowRight size={27}/>

      </button>
      <div className={`filter w-full  ${filterActive}`}>
        <div className="genre pl-[80px]">
          <ul>
            <h3>Book by Genre</h3>
            <li onClick={() => handleGenreClick("flowers")}>All Genres</li>
            <li onClick={() => handleGenreClick("Business")}>Business</li>
            <li onClick={() => handleGenreClick("Science")}>Science</li>
            <li onClick={() => handleGenreClick("Fiction")}>Fiction</li>
            <li onClick={() => handleGenreClick("Philosophy")}>Philosophy</li>
            <li onClick={() => handleGenreClick("Biography")}>Biography</li>
            
          </ul>
        </div>
        <div className="recomendations pl-[80px]">
          <ul>
            <h3>Recomendations</h3>
            <li>Artist of the Month</li>
            <li>Book of the Year</li>
            <li>Top Genre</li>
            <li>Trending</li>
          </ul>
        </div>
      </div>
    </div>
     
      {/* Например: <AnotherComponent selectedGenre={selectedGenre} selectedRecommendation={selectedRecommendation} /> */}
    </>
  );
};


export default Filter
