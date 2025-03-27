"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [activeSubSubDropdown, setActiveSubSubDropdown] = useState<string | null>(null);

  const handleDropdownClick = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const handleSubDropdownClick = (subItem: string) => {
    setActiveSubDropdown(activeSubDropdown === subItem ? null : subItem);
  };

  return (
    <nav className="text-[#003366] p-1 ml-2 flex justify-between items-center font-semibold">
      {/* Logo on the Left */}
      <div>
        <Link href="/">
        <Image src="/Logo/LogoRound.png" alt="Diginfo Logo" width={60} height={60}/>
        </Link>
      </div>
      
      {/* Navigation Links in the Middle */}
      <div className="flex space-x-6">
        {["Home", "Dropdown", "Services", "Pricing", "Contact"].map((item, index) => (
          <div
            key={index}
            className="relative"
          >
            <button 
              className={`hover:text-[#F69226] flex items-center ${activeDropdown === item ? 'text-[#F69226]' : ''}`}
              onClick={() => handleDropdownClick(item)}
            >
              {item} {item === "Dropdown" && <span className="ml-1">▾</span>}
            </button>
            {activeDropdown === item && item !== "Home" && item !== "Media" && (
              <div className="absolute left-0 mt-2 bg-gray-100 shadow-lg rounded-md w-48">
                <ul className="py-2">
                  {["Option 1", "Option 2", "Option 3", "Option 4"].map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      <button
                        className={`w-full text-left ${activeSubDropdown === subItem ? 'text-[#F69226]' : ''}`}
                        onClick={() => handleSubDropdownClick(subItem)}
                      >
                        {subItem} ▸
                      </button>
                      {activeSubDropdown === subItem && (
                        <div className="absolute left-full top-0 ml-2 bg-gray-100 shadow-lg rounded-md w-48">
                          <ul className="py-2">
                            {["Sub-Option A", "Sub-Option B", "Sub-Option C"].map((subSubItem, subSubIndex) => (
                              <li key={subSubIndex} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                {subSubItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Media Button on the Right */}
      <div>
        <Link href="/media">
        <button className="hover:text-[#F69226] mr-2">Media</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
