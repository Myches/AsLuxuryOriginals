import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import AuthLayout from './layout/AuthLayout';
import './App.css';
import NotFound from './pages/NotFound';
import SearchResults from './pages/SearchResults';
import FilterResults from './components/FilterResults';

function App() {
  // Static pages defined inline
  const Home = () => <div>Home Page</div>;
  const Fragrances = () => <div>Fragrances Page</div>;
  const NewArrivals = () => <div>New Arrivals Page</div>;
  const Clothing = () => <div>Clothing Page</div>;
  const Footwear = () => <div>Footwear Page</div>;
  const Accessories = () => <div>Accessories Page</div>;
  const Login = () => <div>Login Page</div>;
  const SignUp = () => <div>Sign Up Page</div>;
 

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
        </Route>

        /* Auth Layout Routes */
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        /* 404 Not Found Route */
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
