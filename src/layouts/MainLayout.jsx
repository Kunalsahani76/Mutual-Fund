import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function MainLayout({ children, currentRoute }) {
  return (
    <div className="app-shell">
      <Navbar currentRoute={currentRoute} />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
