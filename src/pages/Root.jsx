import { Outlet } from 'react-router-dom';

import Header from "../components/Header";
import Footer from '../components/Footer';

import avatar from '../assets/profile-pic.jpg';

function RootLayout() {
  return (
    <>
      <Header img={avatar}/>
      <main>
        <Outlet />
      </main>
      <Footer img={avatar}/>
    </>
  )
}

export default RootLayout;