import Blogs from "../Blogs/Blogs"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import Navbar from "../Navbar/Navbar"
import './BlogPage.scss'


const BlogPage = () => {
  return (
    <>
      <header className="blog-header">
      <Navbar/>
        <Hero prop={'BLOG MYBOOK'} />
      </header>
      <main>
        <section>
        <Blogs/>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default BlogPage
