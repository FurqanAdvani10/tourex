import { Suspense, useEffect, useState } from 'react'
import './App.css'
import { CLoader, Footer, Header} from './components'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AboutUs, BlogsPage, ContactPage, Details, FAQ, Home,  PackagePage,  TeamPage } from './pages'
import SubFooter from './components/sub-footer/sub'
import BlogDetails from './pages/blogs/blogDetails'
// import CookieConsent from './Utils/CookieConsent'

function App() {


  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 1 second ke liye loader show hoga
    return () => clearTimeout(timer);
  }, [location.pathname]);



  return (
    <>

      <div>
        {isLoading ? (
          <CLoader />
        ) : (
          <>
            <Header />
            <div style={{ height: '85px', padding: '0px' }}></div>

            <Suspense fallback={<CLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/faqs" element={<FAQ />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/packages" element={<PackagePage />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/blogs' element={<BlogsPage />} />
                <Route path="/blog/:slug" element={<BlogDetails />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>

            {/* <CookieConsent /> */}
            <SubFooter />
            <Footer />
          </>

        )}
      </div>
    </>
  )
}

export default App
