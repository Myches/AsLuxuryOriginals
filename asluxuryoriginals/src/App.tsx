
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import AuthLayout from './layout/AuthLayout';
import './App.css';
import NotFound from './pages/NotFound';
import SearchResults from './pages/SearchResults';
import FilterResults from './components/FilterResults';
import SignInPage from "./pages/login/sign";
import SignUpPage from "./pages/login/signUp";
import Membership from "./pages/userProfile/account/Membership";
import OrdersReturns from "./pages/userProfile/account/Orders";
import CreditsRefunds from "./pages/userProfile/account/Credits";
import DetailsSecurity from "./pages/userProfile/account/Details";
import Footwear from './homeNavPages/Footwear';
import Fragrances from './homeNavPages/Fragrances';
import Accessories from './homeNavPages/Accessories';
import NewArrivals from './homeNavPages/Arrival';
import Clothing from './homeNavPages/Clothing';
import Home from './homeNavPages/HomePage';


function App() {
  // Static pages defined inline



  return (
    <Router>
      <Routes>
        /* Main Layout Routes */
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="fragrances" element={<Fragrances />} />
          <Route path="new-arrivals" element={<NewArrivals />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="footwear" element={<Footwear />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="/product/:id" element={<SearchResults />} />
          <Route path="filter-results" element={<FilterResults />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/account/membership" element={<Membership />} />
          <Route path="/orders" element={<OrdersReturns />} />
          <Route path="/credits" element={<CreditsRefunds />} />
          <Route path="/security" element={<DetailsSecurity />} />
          <Route path="/sign" element={<SignInPage />} />
          <Route path="/footwear/:category" element={<Footwear />} />
          <Route path="/clothing/:category" element={<Clothing />} />
        </Route>

        

        /* Auth Layout Routes */
        <Route path="/auth" element={<AuthLayout />}>
        </Route>

        /* 404 Not Found Route */
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  )
}

export default App;
