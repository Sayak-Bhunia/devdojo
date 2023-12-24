import React from 'react';

const Navbar = () => (
  <nav>
    <input type="checkbox" id="check" />
    <label htmlFor="check" className="checkbtn">
      <a href="https://github.com/The-Dev-Dojo/" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-github bx-md'></i>
      </a>
      <a href="https://www.linkedin.com/company/99019744/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-linkedin-square bx-md'></i>
      </a>
    </label>
  </nav>
);

export default Navbar;
