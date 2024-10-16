import React from "react";

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li className="mb-4">
          <a href="/dashboard" className="flex items-center text-gray-800">
            <span className="mr-2">&#x1F5A5;</span>
            Dashboard
          </a>
        </li>
        <li className="mb-4">
          <a href="/contract" className="flex items-center text-gray-800">
            <span className="mr-2">&#x1F5C3;</span>
            Contract
          </a>
        </li>
        <li className="mb-4">
          <a href="/exporters" className="flex items-center text-gray-800">
            <span className="mr-2">&#x2795;</span>
            My Exporters
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
