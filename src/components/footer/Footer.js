import "./Footer.css";
import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



function Footer() {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    // Update currentPage based on the current route

    if (location.pathname === '/recipes') {
      setCurrentPage(2);
    } else if (location.pathname === '/') {
      // Set other pages as needed
      setCurrentPage(1);
    } else if (location.pathname === '/breathing') {
      // Set other pages as needed
      setCurrentPage(3);
    }
    else if (location.pathname === '/surroundings') {
      // Set other pages as needed
      setCurrentPage(4);
    }
    else if (location.pathname === '/end') {
      // Set other pages as needed
      setCurrentPage(5);
    }
  }, [location]);
  return (

    <div className="footer">
      <div className={`panel ${currentPage >= 1 ? 'filled' : ''}`} ></div>
      <div className={`panel ${currentPage >= 2 ? 'filled' : ''}`} ></div>
      <div className={`panel ${currentPage >= 3 ? 'filled' : ''}`} ></div>
      <div className={`panel ${currentPage >= 4 ? 'filled' : ''}`} ></div>
      <div className={`panel ${currentPage >= 5 ? 'filled' : ''}`} ></div>
    </div>
  );
    
  
}
export default Footer