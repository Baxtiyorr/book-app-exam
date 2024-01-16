import { useDispatch, useSelector } from "react-redux"
import { getBlogs } from "../../redux/slice/blogslice"
import { useEffect } from "react";
import rectangle from '../../assets/Images/Rectangle48.png'

import './Blogs.scss'

const Blogs = () => {

    const dispatch = useDispatch();
    const blogsData = useSelector(state => state.getBlogs);

    const{data} = blogsData

    console.log(blogsData);


    useEffect(() => {
        dispatch(getBlogs(`https://newsapi.org/v2/everything?q=tesla&from=2023-12-16&sortBy=publishedAt&apiKey=cab072fea1114dc3909aa7c153890615`));
    }, []);

  return (
    <>
      <div className="blog-container">
        <div className="blog__wrapper mt-[73px]">
            {
                data?.articles?.map((news, index) =>(
                    <div className="blog" key={index}>
                        <img src={news?.urlToImage} alt={news?.author} />

                        <div className="blog__content">
                            <h2>{news?.author}</h2>
                            <p>{news?.description}</p>
                        </div>

                    </div>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default Blogs
