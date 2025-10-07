import { Outlet } from 'react-router-dom';

import Header from "../components/Header.tsx";
import Footer from '../components/Footer.tsx';

import avatar from '../assets/profile-pic.jpg';

function RootLayout() {
  return (
    <div className="relative min-h-[100vh] font-raleway text-n-light-grey bg-gradient-to-b from-[#010d13] to-[#092533]">
      <Header imageSrc={avatar}/>
      <main>
        <Outlet />
      </main>
      <Footer imageSrc={avatar}/>
    </div>
  )
}

export default RootLayout;