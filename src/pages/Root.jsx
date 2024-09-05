import { Outlet } from 'react-router-dom';

import Header from "../components/Header";
import Footer from '../components/Footer';

import avatar from '../assets/profile-pic.jpg';

function RootLayout() {
  return (
    <div className="relative min-h-[100vh] font-raleway text-n-light-grey bg-gradient-to-b from-[#010d13] to-[#092533]">
      <Header img={avatar}/>
      <main>
        <Outlet />
      </main>
      <Footer img={avatar}/>
    </div>
  )
}

export default RootLayout;