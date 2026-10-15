import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom' 



const App = () => {
  return (

    <div className="container">
      <Header />

      <div className="topSection"></div>
      <main className='Projects'>
        <div className="ProjectsFrame">
          <Link
            to="/proyecto/el-caudillo"
            className='ProjectClick div1'
            style={{
              backgroundImage: 'url("/projectImages/el-caudillo/Image (5).webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h2>El Caudillo</h2>
            <h4>A Social Intrigue Game</h4>
          </Link>
          <Link to="/proyecto/cesida" className='ProjectClick div2'>Project</Link>
          <Link to="/proyecto/igor" className='ProjectClick div3'>Project</Link>
          <Link className='ProjectClick div4'>Project</Link>
          <Link className='ProjectClick div5'>Project</Link>
          <Link className='ProjectClick div6'>Project</Link>
          <Link className='ProjectClick div7'>Project</Link>



        </div>
      </main>
      <Footer />


    </div>
  )
}

export default App