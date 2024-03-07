import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
    <div className="sidebar-container" style={{ fontSize: '1.5rem', lineHeight: '3' }}>
        <nav>
            <ul>
                <li><Link to="/lab1">Lab 1</Link></li>
                <li><Link to="/lab2">Lab 2</Link></li>
                <li><Link to="/lab3">Lab 3</Link></li>
            </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
