import Navbar from './Navbar/Navbar'
import TopNav from './Navbar/TopNav'
import Footer from './Footer/Footer'

function Layout({children}) {
  return (
    <>
     <TopNav/>
     <Navbar/>
     {children}
     <Footer/>
    </>
  )
}

export default Layout