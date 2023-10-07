import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
import OfferBanner from "./OfferBanner";
const Layout = () => {
  return (
    <>
     <OfferBanner />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Flowers">Flowers</Link>
          </li>
          <li>
            <Link to="/Plants">Plants</Link>
          </li>
          <li>
            <Link to="/Chocolate">Chocolate</Link>
          </li>
          <li>
            <Link to="/ByOccasion">ByOccasion</Link>
          </li>
          <li> 
            <Link to="/Option">Make it with love</Link>
            </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;