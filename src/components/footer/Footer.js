import "./Footer.css";
import {useState} from 'react';


function Footer() {
    // State to manage the current page and progress
  const [currentPage, setCurrentPage] = useState(1);

  // Function to update the current page
  const updatePage = (page) => {
    setCurrentPage(page);
  };
  return (

    <div className="footer">
      <div className={`panel ${currentPage >= 1 ? 'filled' : ''}`} onClick={() => updatePage(1)}></div>
      <div className={`panel ${currentPage >= 2 ? 'filled' : ''}`} onClick={() => updatePage(2)}></div>
      <div className={`panel ${currentPage >= 3 ? 'filled' : ''}`} onClick={() => updatePage(3)}></div>
      <div className={`panel ${currentPage >= 4 ? 'filled' : ''}`} onClick={() => updatePage(4)}></div>
    </div>
  );
    
  
}
export default Footer