"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const subDropdownRef = useRef<HTMLDivElement>(null);

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dropdownContent = {
    Company: {
      "About Us": ["Company Overview", "Leadership", "Experience", "Accredation", "Policy"],
      "Strategy": ["DG Edge", "Customer Recognition", "Knowledge Base", "Implimentation Services", "Technical Support"],
      "Contact Us": []
    },
    Services: {
      "Detection & Response": ["GRC Consulting", "CyberSecurity Consulting & Advisory Services", "Best Cyber Security Product Report", "Buyers Guide For Best Cyber Security Product"],
      "Assesment": ["GRC Implementation Services", "Security Assesment & Penetration Testing", "POC As A Service"],
      "Managed": ["Managed Security Services (MSS)", "Cyber Security Professional & Certification Training Through DG Academy", "Business Continuity & Recovery (BCM DR) Automation"],
      "Cloud": ["DG Cloud Hosting Services", "Virtualization & Cloud Computing (VCC) Consulting Services", "Cloud Migration Services"],
    },
    Products: {
      "Security Challenge": ["Threat Assurance", "DG Lab"],
      "Education": ["DG Academy", "DG Kids"],
      "Cloud Security": ["DG Cloud"],
      // "Media": ["DG Magazine", "DG Media"],
      "Technology": ["Native Security"],
    }
  };

  const handleItemClick = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setMobileMenuOpen(false);
  };

  const handleDropdown = (item: string) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === item ? null : item);
      setActiveSubDropdown(null);
    } else {
      setActiveDropdown(item);
    }
  };

  const handleSubDropdown = (subItem: string) => {
    setActiveSubDropdown(activeSubDropdown === subItem ? null : subItem);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className="text-[#003366] bg-[#F7F7F7] shadow-lg p-1 flex flex-col md:flex-row justify-between items-center font-semibold sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo and Mobile Menu Button */}
      <div className="w-full md:w-auto flex justify-between items-center">
        <Link href="/" onClick={handleItemClick}>
          <Image 
            src="/Logo/LogoRound.png" 
            alt="Diginfo Logo" 
            width={70} 
            height={70}
            className="w-12 h-12 md:w-16 md:h-16"
          />
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-[#003366]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links - Desktop */}
      <div 
        ref={dropdownRef}
        className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-4 w-full md:w-auto mt-4 md:mt-0`}
      >
        {["Home", "Company", "Services", "Products"].map((item) => (
          <div
            key={item}
            className="relative group py-2 md:py-0 w-full md:w-auto"
            onMouseEnter={() => !isMobile && handleDropdown(item)}
            onMouseLeave={() => !isMobile && closeAll()}
          >
            {item === "Home" ? (
              <Link href="/" onClick={closeAll} className="px-4 py-2 block hover:text-[#F69226]">
                {item}
              </Link>
            ) : (
              <>
                <button
                  onClick={() => handleDropdown(item)}
                  className={`px-4 py-2 w-full md:w-auto flex justify-between items-center hover:text-[#F69226] ${
                    activeDropdown === item ? 'text-[#F69226]' : ''
                  }`}
                >
                  {item}
                  <span className="ml-2">
                    {isMobile ? (activeDropdown === item ? '▴' : '▾') : '▾'}
                  </span>
                </button>

                {/* Dropdown Content */}
                {activeDropdown === item && (
                  <div 
                    className="md:absolute left-0 bg-white shadow-lg w-full md:w-56"
                    onMouseLeave={() => !isMobile && setActiveSubDropdown(null)}
                  >
                    <ul className="py-1">
                      {Object.entries(dropdownContent[item as keyof typeof dropdownContent]).map(([subItem, subSubItems]) => (
                        <li
                          key={subItem}
                          className="relative border-t border-gray-100 first:border-0"
                          onMouseEnter={() => !isMobile && setActiveSubDropdown(subItem)}
                        >
                          <div className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
                            {subSubItems.length > 0 ? (
                              <button
                                onClick={() => handleSubDropdown(subItem)}
                                className="w-full text-left flex justify-between items-center"
                              >
                                {subItem}
                                {subSubItems.length > 0 && (
                                  <span>{isMobile ? (activeSubDropdown === subItem ? '▴' : '▾') : '▸'}</span>
                                )}
                              </button>
                            ) : (
                              <Link
                                href={`/${item.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={closeAll}
                                className="block w-full"
                              >
                                {subItem}
                              </Link>
                            )}
                          </div>

                          {/* Subdropdown Content */}
                          {activeSubDropdown === subItem && subSubItems.length > 0 && (
                            <div 
                              ref={subDropdownRef}
                              className={`${
                                isMobile 
                                  ? 'pl-4 bg-gray-50' 
                                  : 'md:absolute md:left-full md:top-0 md:min-w-[280px] bg-white shadow-lg'
                              }`}
                            >
                              <ul className="py-1">
                                {subSubItems.map((subSubItem) => (
                                  <li key={subSubItem} className="px-4 py-2 hover:bg-gray-100">
                                    <Link
                                      href={`/${item.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}/${subSubItem.toLowerCase().replace(/\s+/g, '-')}`}
                                      onClick={closeAll}
                                      className="block w-full"
                                    >
                                      {subSubItem}
                                    </Link>
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
              </>
            )}
          </div>
        ))}
      </div>
      
      {/* Contact Button */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mt-4 md:mt-0`}>
        <Link href="/media" onClick={handleItemClick}>
          <button 
            className="hover:text-[#F69226] px-4 py-2 w-full md:w-auto text-left md:text-center"
            role="menuitem"
          >
            Media
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;