import { Outlet } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Mainlayout = () => {
  return (
    <>
      <div className='min-h-[100dvh] flex flex-col overflow-hidden'>
        <Navbar />
        <main className='grow grid grid-cols-1 items-center pt-20 pb-15'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Mainlayout;
