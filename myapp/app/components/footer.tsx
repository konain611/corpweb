import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="text-gray-600 bg-[#F7F7F7]">
            <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center justify-between">
                {/* Left Section - Logo & Copyright */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-4 sm:mb-0">
                    <Link href="/" className="flex items-center text-gray-900">
                        {/* Preserved your exact logo sizing */}
                        <Image 
                            src="/Logo/LogoSquare.jpg" 
                            alt="Diginfo Logo" 
                            width={75} 
                            height={75} 
                            className="w-auto h-auto" // Maintains your original logo dimensions
                        />
                        <span className="ml-3 text-xl">Diginfo</span>
                    </Link>

                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-500">
                        <span>All Rights Reserved by DIGINFO 2021 ©</span>
                        <span>Copyright© 2021-2023 DIGINFO GROUP</span>
                    </div>
                </div>

                {/* Right Section - Email & Social */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                    <p className="text-sm text-gray-500">
                        Email:
                        <a
                            href="mailto:info@diginfo.net"
                            className="text-gray-600 ml-1 hover:text-[#F69226] transition-colors"
                        >
                            info@diginfo.net
                        </a>
                    </p>

                    {/* Social Icons - Preserved your styling */}
                    <div className="inline-flex gap-4">
                        <a href="https://www.facebook.com/people/Diginfo/100083668464230/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-[#003366] hover:text-[#F69226] transition-colors"
                           aria-label="Facebook">
                            <Facebook strokeWidth={2} size={20} />
                        </a>
                        <a href="https://www.instagram.com/diginfomedia/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-[#003366] hover:text-[#F69226] transition-colors"
                           aria-label="Instagram">
                            <Instagram strokeWidth={2} size={20} />
                        </a>
                        <a href="https://x.com/DGINFOMEDIA/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-[#003366] hover:text-[#F69226] transition-colors"
                           aria-label="Twitter">
                            <Twitter strokeWidth={2} size={20} />
                        </a>
                        <a href="https://www.youtube.com/@diginfomedia/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-[#003366] hover:text-[#F69226] transition-colors"
                           aria-label="YouTube">
                            <Youtube strokeWidth={2} size={20} />
                        </a>
                        <a href="https://www.linkedin.com/company/diginfomedia/about/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-[#003366] hover:text-[#F69226] transition-colors"
                           aria-label="LinkedIn">
                            <Linkedin strokeWidth={2} size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}