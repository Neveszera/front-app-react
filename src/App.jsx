import { Outlet } from "react-router-dom";
import Nav from './components/Nav'
import Footer from './components/Footer'
import styles from "./css/App.module.css";

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