
import Filter from "../Filter/Filter"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import Navbar from "../Navbar/Navbar"
import Shop from "../Shop/Shop"


const ShopPage = () => {
  return (
    <>
      <header>
        <Navbar/>
        <Hero prop={'APPRECIATE YOUR AUTHOR`S WORK'} />
      </header>
      <main>
        <section className="mt-[90px] flex gap-[69px] max-[952px]:flex-col">
          <Filter/>
          <Shop/>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default ShopPage
