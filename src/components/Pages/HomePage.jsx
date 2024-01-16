import Books from "../Books/Books"

import Filter from "../Filter/Filter"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import Navbar from "../Navbar/Navbar"
import './HomePage.scss'

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar/>
        <Hero prop={'READ AND ADD YOUR INSIGHT'} />
      </header>
      <main>
        <section className="mt-[90px] flex gap-[59px] max-[952px]:flex-col">
          <Filter/>
          <Books/>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default HomePage
