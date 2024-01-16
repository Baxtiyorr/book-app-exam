import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../components/Pages/HomePage"
import SinglePage from "../components/Pages/SinglePage"
import BlogPage from "../components/Pages/BlogPage"
import ShopPage from "../components/Pages/ShopPage"


const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/book/:bookId" element={<SinglePage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
