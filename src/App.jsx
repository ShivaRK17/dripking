import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Hero from './pages/Hero/Hero'
import Vision from './pages/Vision/Vision';
import Quality from './pages/Quality/Quality'
import Why from './pages/Why/Why'
import Numbers from './pages/Numbers/Numbers'
import Industry from './pages/Industry/Industry'
import Careers from './pages/Careers/Careers'


function App() {
  return <>
    <Header />
    <Hero/>
    <Vision/>
    <Quality/>
    <Why/>
    <Numbers/>
    <Industry/>
    <Careers/>
    <Footer />
  </>
}

export default App
