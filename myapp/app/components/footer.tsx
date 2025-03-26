import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font bg-[#F7F7F7]">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image src="/Logo/LogoSquare.jpg" alt="Diginfo Logo" width={75} height={75} className="w-auto h-auto" />
                    <span className="ml-3 text-xl">Diginfo</span>
                </Link>

                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    Email:
                    <a
                        href="mailto:info@diginfo.net"
                        className="text-gray-600 ml-1 hover:text-yellow-500 active:text-yellow-600 transition-colors duration-200"
                    >
                        info@diginfo.net
                    </a>
                </p>

                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    All Rights Reserved by DIGINFO 2021 ©
                </p>

                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    Copyright© 2021-2023 DIGINFO GROUP
                </p>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
                    <a href="https://www.facebook.com/people/Diginfo/100083668464230/" target="_blank" rel="noopener noreferrer" className="text-[#003366] hover:text-[#F69226] transition-colors duration-200">
                        <Facebook strokeWidth={2} />
                    </a>
                    <a href="https://www.instagram.com/diginfomedia/" target="_blank" rel="noopener noreferrer" className="text-[#003366] hover:text-[#F69226] transition-colors duration-200">
                        <Instagram strokeWidth={2} />
                    </a>
                    <a href="https://x.com/DGINFOMEDIA/" target="_blank" rel="noopener noreferrer" className="text-[#003366] hover:text-[#F69226] transition-colors duration-200">
                        <Twitter strokeWidth={2} />
                    </a>
                    <a href="https://www.youtube.com/@diginfomedia/" target="_blank" rel="noopener noreferrer" className="text-[#003366] hover:text-[#F69226] transition-colors duration-200">
                        <Youtube strokeWidth={2} />
                    </a>
                    <a href="https://www.linkedin.com/company/diginfomedia/about/" target="_blank" rel="noopener noreferrer" className="text-[#003366] hover:text-[#F69226] transition-colors duration-200">
                        <Linkedin strokeWidth={2} />
                    </a>
                </span>
                
            </div>
        </footer>
    )
}
