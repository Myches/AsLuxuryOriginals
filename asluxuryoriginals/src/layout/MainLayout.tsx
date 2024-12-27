import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen gap-y-12">
      <Navbar />
      <main className="flex-grow flex w-full  min-h-screen ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
