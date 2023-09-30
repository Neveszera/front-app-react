import { Outlet } from "react-router-dom";
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function App()  {
  return (
    <div>
      <h1>Olá Mundo!</h1>
        <Nav/>
          <Outlet/>
        <Footer/>
    </div>
  )
}