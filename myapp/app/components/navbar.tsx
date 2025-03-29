"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  const dropdownContent = {
    Company: {
      "About Us": ["Company Overview", "Leadership", "Experience", "Accredation", "Policy"],
      "Strategy": ["DG Edge", "Customer Recognition", "Knowledge Base", "Implimentation Services", "Technical Support"],
      "Contact Us": ["Customer Support", "Partner With Us", "General Query", "Media Request"],
    },
    Services: {
      "Detection & Response": ["GRC Consulting", "CyberSecurity Consulting & Advisory Services", "Best Cyber Security Product Report", "Buyer's Guide For Best Cyber Security Product"],
      "Assesment": ["GRC Implementation Services", "Security Assesment & Penetration Testing", "POC As A Service"],
      "Managed": ["Managed Security Services (MSS)", "Cyber Secuirty Professional & Certification Training Through DG Academy", "Business Continuity & Recovery (BCM DR) Automation"],
      "Cloud": ["DG Cloud Hosting Services", "Virtualization & Cloud Computing (VCC) Consulting Services", "Cloud Migration Services"],
    },
    Products: {
      "Security Challenge": ["Threat Assurance", "DG Lab"],
      "Education": ["DG Academy", "DG Kids"],
      "Cloud Security": ["DG Cloud"],
      "Media": ["DG Magazine", "DG Media"],
      "Technology": ["Native Security"],
    }
  };

  const handleDropdownHover = (item: string) => {
    setActiveDropdown(item);
  };

  const handleSubDropdownHover = (subItem: string) => {
    setActiveSubDropdown(subItem);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  return (
    <nav className="text-[#003366] bg-[#F7F7F7] shadow-lg p-1 flex justify-between items-center font-semibold">
      {/* Logo on the Left */}
      <div>
        <Link href="/">
          <Image src="/Logo/LogoRound.png" alt="Diginfo Logo" width={70} height={70} />
        </Link>
      </div>
      
      {/* Navigation Links in the Middle */}
      <div className="flex space-x-12">
        {["Home", "Company", "Services", "Products"].map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => handleDropdownHover(item)}
            onMouseLeave={handleMouseLeave}
          >
            {item === "Home" ? (
              <Link href="/" className="hover:text-[#F69226] flex items-center">
                {item}
              </Link>
            ) : (
              <button 
                className={`hover:text-[#F69226] flex items-center ${activeDropdown === item ? 'text-[#F69226]' : ''}`}
              >
                {item} <span className="ml-1">▾</span>
              </button>
            )}
            
            {activeDropdown === item && dropdownContent[item as keyof typeof dropdownContent] && (
              <div className="absolute left-0 bg-white shadow-lg rounded-md w-56 z-10">
                <ul className="py-1">
                  {Object.entries(dropdownContent[item as keyof typeof dropdownContent]).map(([subItem, subSubItems], subIndex) => [
                    subIndex > 0 && (
                      <li key={`divider-${subIndex}`} className="px-2">
                        <hr className="border-t border-gray-200" />
                      </li>
                    ),
                    <li
                      key={subIndex}
                      className="relative px-4 py-3 hover:bg-gray-100 group/subitem"
                      onMouseEnter={() => handleSubDropdownHover(subItem)}
                      onMouseLeave={() => setActiveSubDropdown(null)}
                    >
                      <div className="flex justify-between items-center">
                        <span>{subItem}</span>
                        {subSubItems.length > 0 && <span>▸</span>}
                      </div>
                
                      {activeSubDropdown === subItem && subSubItems.length > 0 && (
                        <div className="absolute left-full top-0 bg-white shadow-lg rounded-md min-w-[280px] z-20">
                          <ul className="py-1">
                            {subSubItems.map((subSubItem, subSubIndex) => [
                              subSubIndex > 0 && (
                                <li key={`subdivider-${subSubIndex}`} className="px-2">
                                  <hr className="border-t border-gray-200" />
                                </li>
                              ),
                              <li 
                                key={subSubIndex} 
                                className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                              >
                                <Link 
                                  href={`/${item.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}/${subSubItem.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block w-full"
                                >
                                  {subSubItem}
                                </Link>
                              </li>
                            ])}
                          </ul>
                        </div>
                      )}
                    </li>
                  ])}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Media Button on the Right */}
      <div>
        <Link href="/media">
          <button className="hover:text-[#F69226] mr-4">Media</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;