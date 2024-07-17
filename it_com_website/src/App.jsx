import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ProductServices from './components/ProductServices';
import ContactUs from './components/ContactUs';
import Careers from './components/Careers';
import Auth from './components/Auth';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
              <Link to="/" className="text-3xl font-bold text-blue-600">Software Solutions Limited</Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <NavLink to="/" label="Home" />
              <NavLink to="/about-us" label="About Us" />
              <NavLink to="/product-services" label="Product/Services" />
              <NavLink to="/contact-us" label="Contact Us" />
              <NavLink to="/careers" label="Careers" />
              <NavLink to="/auth" label="Log In/Sign Up" />
            </div>
            <div className="md:hidden">
              {/* Mobile menu toggle */}
              <MobileMenuToggle />
            </div>
          </div>
          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product-services" element={<ProductServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

// Custom NavLink component for navigation items
const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out"
    activeClassName="font-medium text-blue-600"
  >
    {label}
  </Link>
);

// Mobile menu toggle button (example)
const MobileMenuToggle = () => (
  <button className="text-gray-600 hover:text-blue-600 focus:outline-none">
    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>
);

// Mobile menu component (example)
const MobileMenu = () => (
  <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-gray-100 shadow-lg transform translate-x-full transition duration-300 ease-in-out">
    <div className="flex flex-col items-center pt-20">
      <NavLink to="/" label="Home" />
      <NavLink to="/about-us" label="About Us" />
      <NavLink to="/product-services" label="Product/Services" />
      <NavLink to="/contact-us" label="Contact Us" />
      <NavLink to="/careers" label="Careers" />
      <NavLink to="/auth" label="Log In/Sign Up" />
    </div>
  </div>
);

export default App;
