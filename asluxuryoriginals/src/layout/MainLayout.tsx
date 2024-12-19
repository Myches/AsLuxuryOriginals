import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import App from '../App';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen flex-grow">
        <Outlet /> 
        
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
