import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import NotFound from "./pages/NotFound";
import FilterResults from "./components/FilterResults";
import SignInPage from "./pages/login/sign";
import SignUpPage from "./pages/login/signUp";
import Membership from "./pages/userProfile/account/Membership";
import OrdersReturns from "./pages/userProfile/account/Orders";
import CreditsRefunds from "./pages/userProfile/account/Credits";
import DetailsSecurity from "./pages/userProfile/account/Details";
import "./App.css";
import About from "./Static-pages/About";
import FAQs from "./Static-pages/FAQs";
import TermsOfService from "./Static-pages/TermsOfService";
import RefundPolicy from "./Static-pages/RefundPolicy";
import ShippingPolicy from "./Static-pages/ShippingPolicy";
import PrivacyPolicy from "./Static-pages/PrivacyPolicy";
import CookiePolicy from "./Static-pages/CookiePolicy";
import ExchangePolicy from "./Static-pages/ExchangePolicy";
import ContactUs from "./Static-pages/ContactUs";
import Footwear from "./homeNavPages/Footwear";
import Fragrances from "./homeNavPages/Fragrances";
import Accessories from "./homeNavPages/Accessories";
import NewArrivals from "./homeNavPages/Arrival";
import Clothing from "./homeNavPages/Clothing";
import Home from "./homeNavPages/HomePage";
import SearchResults from "./pages/search-result/SearchResults";
import Checkout from "./pages/checkout/Checkout";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  // Static pages defined inline

  return (
    <Router>
 <ScrollToTop />
      <Routes>
        /* Main Layout Routes */
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="exchange-policy" element={<ExchangePolicy />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="fragrances" element={<Fragrances />} />
          <Route path="new-arrivals" element={<NewArrivals />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="footwear" element={<Footwear />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="/product/:id" element={<SearchResults />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="filter-results" element={<FilterResults />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/account/membership" element={<Membership />} />
          <Route path="/orders" element={<OrdersReturns />} />
          <Route path="/credits" element={<CreditsRefunds />} />
          <Route path="/security" element={<DetailsSecurity />} />
          <Route path="/sign" element={<SignInPage />} />
          <Route path="/footwear/:category" element={<Footwear />} />
          <Route path="/clothing/:category" element={<Clothing />} />
          <Route path="/accessories/:category" element={<Accessories />} />
          <Route path="/fragrances/:category" element={<Fragrances />} />
        </Route>
        /* Auth Layout Routes */
        <Route path="/auth" element={<AuthLayout />}></Route>
        /* 404 Not Found Route */
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
