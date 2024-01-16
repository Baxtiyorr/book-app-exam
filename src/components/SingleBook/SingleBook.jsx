import {useDispatch, useSelector } from "react-redux"
import {getSingleBooks} from "../../redux/slice/getSingleBook"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import start from '../../assets/Icons/start.svg'
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import './SingleBook.scss'


const SingleBook = () => {

    const {bookId} = useParams()
    console.log(bookId);
    const dispatch = useDispatch()
    const singleData = useSelector(state => state.getSingleBooks)
    console.log(singleData);

    const {singleBook} = singleData
    

    useEffect(() =>{
        dispatch(getSingleBooks(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyCwGYpkfGpJVXIVrR7Qo39pWNqxG149Ssk`))
    },[])

  return (
    <section>
        <div className="bg-image"></div>
      <div className="singlebook-container mt-[168px]">
        <Link to={'/'}><FaArrowLeft size={60} color="white"/></Link>
        <div className="singlebook ">
            <div className="singlebook__book">
                <img className="singlebook__book-img w-[287px] " src={singleBook?.volumeInfo?.imageLinks?.thumbnail} alt={singleBook?.volumeInfo?.title} />
                <div className="singlebook__book-header">
                    <h1>{singleBook?.volumeInfo?.title} <FaRegSquarePlus size={18} className="cursor-pointer"/></h1>
                    <div className="mt-[25px] mb-[15px]">
                        <span className="mr-[25px] ">by {singleBook?.volumeInfo?.authors[0]}</span>
                        <span>publised at: {singleBook?.volumeInfo?.publishedDate}</span>
                    </div>
                    <img src={start} alt="start" />
                    <div className="mt-[25px] mb-[44px]">
                        <span className="mr-[25px]">3.7M read</span>
                        <span>9.8K Votes</span>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <button className="buy-book-btn">Buy Now</button>
                        <button className="read-book-btn">Read Book</button>
                    </div>
                </div>
            </div>

            <div className="singlebook__content mt-[57px] mx-[38px] pb-[33px]">
                <div className="description mb-[54px]">
                    <h2>Sinopsis</h2>

                    <p>{singleBook?.volumeInfo?.description}</p>
                </div>
                <div className="themes">
                    <div className="theme">
                    Biografi
                    </div>
                    <div className="theme">
                    AutoBiografi
                    </div><div className="theme">
                    Memoar
                    </div>
                </div>
                <div className="information">
                    <h2>Informasi Tambahan</h2>
                    <div className="information__content">
                        <div className="detail">
                            <h3 className="mb-[10px] text-[#666666FF] ">Penerbit</h3>
                            <h3 className="mb-[20px] text-[#B3B3B3FF]">Mediakita</h3>
                            <h3 className="mb-[10px] text-[#666666FF]">Genre</h3>
                            <h3 className=" text-[#B3B3B3FF]">{singleBook?.volumeInfo?.categories[0]}</h3>
                        </div>
                        <div className="detail">
                            <h3 className="mb-[10px] text-[#666666FF] ">Diterbitkan Tanggal</h3>
                            <h3 className="mb-[20px] text-[#B3B3B3FF]">{singleBook?.volumeInfo?.publishedDate}</h3>
                            <h3 className="mb-[10px] text-[#666666FF]">Halaman</h3>
                            <h3 className=" text-[#B3B3B3FF]">210 Halaman</h3>
                        </div>
                        <div className="detail">
                            <h3 className="mb-[10px] text-[#666666FF] ">Bahasa</h3>
                            <h3 className="mb-[20px] text-[#B3B3B3FF]">indonesia</h3>
                            <h3 className="mb-[10px] text-[#666666FF]">Keterangan</h3>
                            <h3 className=" text-[#B3B3B3FF]">Selesai</h3>
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <button>See comment</button>
                </div>
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default SingleBook
